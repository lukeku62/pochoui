import { DatePicker } from "@pochoui/date-picker"
import { useState } from "react"

export const PageDatePicker = () => {

  const [date, setDate] = useState<Date | null>(null)


  return (
    <div className="min-h-screen bg-base-200 p-8">
      <div className="prose max-w-4xl mx-auto flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Date Picker</h1>
        <DatePicker onChange={setDate} mainColor="#10b981" />
        <p>Selected date: {date?.toLocaleDateString()}</p>
      </div>
    </div>
  )
}


