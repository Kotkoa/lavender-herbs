import { useEffect, useState } from 'react'
import { getSupabase } from '@/lib/supabase'

interface DonationStats {
  totalBushes: number
  totalDonors: number
  isLoading: boolean
}

export function useDonationCount(): DonationStats {
  const [stats, setStats] = useState<DonationStats>({ totalBushes: 0, totalDonors: 0, isLoading: true })

  useEffect(() => {
    const supabase = getSupabase()
    let mounted = true

    async function fetchStats() {
      const { data } = await supabase
        .from('donation_stats')
        .select('total_bushes, total_donors')
        .eq('id', 1)
        .single()

      if (mounted) {
        setStats({
          totalBushes: data?.total_bushes ?? 0,
          totalDonors: data?.total_donors ?? 0,
          isLoading: false,
        })
      }
    }

    fetchStats()
    const channel = supabase
      .channel('donation_stats_changes')
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'donation_stats' }, ({ new: updated }) => {
        if (!mounted) return
        const { total_bushes: totalBushes, total_donors: totalDonors } = updated as { total_bushes: number; total_donors: number }
        setStats({ totalBushes, totalDonors, isLoading: false })
      })
      .subscribe()

    return () => {
      mounted = false
      void supabase.removeChannel(channel)
    }
  }, [])

  return stats
}
