import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

interface DonationStats {
  totalBushes: number
  totalDonors: number
  isLoading: boolean
}

export function useDonationCount(): DonationStats {
  const [totalBushes, setTotalBushes] = useState(0)
  const [totalDonors, setTotalDonors] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      const { data } = await supabase
        .from('donation_stats')
        .select('total_bushes, total_donors')
        .eq('id', 1)
        .single()

      if (data) {
        setTotalBushes(data.total_bushes)
        setTotalDonors(data.total_donors)
      }
      setIsLoading(false)
    }

    fetchStats()

    const channel = supabase
      .channel('donation_stats_changes')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'donation_stats' },
        (payload) => {
          const updated = payload.new as { total_bushes: number; total_donors: number }
          setTotalBushes(updated.total_bushes)
          setTotalDonors(updated.total_donors)
        },
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  return { totalBushes, totalDonors, isLoading }
}
