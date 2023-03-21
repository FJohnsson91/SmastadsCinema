import { useEffect } from 'react'
import { useStates } from '../utilities/states'

import DisplayScreenings from '../components/DisplayScreenings'

export default function Screenings() {

  const s = useStates('main', {
    screenings: []
  })

  const handleScreenings = async () => {
    const responseScreenings = await fetch('api/occupied_seats')

    if (responseScreenings.ok) {
      const fetchedScreenings = await responseScreenings.json()
      s.screenings = fetchedScreenings
    } else {
      const errorMessage = await responseScreenings.text()
      console.error(errorMessage)
    }
  }

  useEffect(() => {
    handleScreenings()
  }, [])

  return <div className="Screening">
    {s.screenings.map(({ screeningTime, movie, auditorium }) => <DisplayScreenings
      screeningTime={screeningTime}
      movie={movie}
      auditorium={auditorium}
    />)}
  </div>
}