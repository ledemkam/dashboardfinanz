import { EntriesProps } from "@/types"
import { useState } from "react"

const EntryForm = ({onAddEntry}: EntriesProps) => {
 const [formData, setFormData] = useState({
  type: "",
  amount: "",
  category: "",
  frequency: "One-time"
 })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const entry = {
      ...formData,
      amount: parseFloat(formData.amount)
    }
    onAddEntry(entry)
    setFormData({
      type: "",
      amount: "",
      category: "",
      frequency: "One-time"
    })
  }
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">Typen</label>
          <select name="type" value={formData.type} onChange={handleChange} id="type" className="w-full p-2 border rounded-md">
            <option value="income">Einkommen</option>
            <option value="expense">Ausgegeben</option>
          </select>
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">Aufstand</label>
          <input type="number" id="amount" name="amount" onChange={handleChange} value={formData.amount} className="w-full p-2 border rounded-md" step="0.01" />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Kategorie</label>
          <input type="text" id="category" name="category" onChange={handleChange} value={formData.category} className="w-full p-2 border rounded-md"  />
        </div>

        <div>
          <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-2">Frequenz</label>
          <select name="frequency" value={formData.frequency} onChange={handleChange} id="frequency" className="w-full p-2 border rounded-md">
            <option value="one_time">Pünktlichkeit</option>
            <option value="weekly">Wöchentlich</option>
            <option value="monthly">monatlich</option>
          </select>
        </div>
      </div>
      <button type="submit" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-all">
        Eintrag hinzufügen
      </button>
    </form>
  )
}
export default EntryForm