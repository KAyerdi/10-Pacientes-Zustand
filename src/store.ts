import { v4 as uuidv4 } from 'uuid'
import { create } from "zustand"
import { DraftPatient, Patient } from "./types"

type PatientState = {
  patients: Patient[]
  activeID: Patient['id']
  addPatient: (data: DraftPatient) => void
  deletePatient: (id: Patient['id']) => void
  getPatientById: (id: Patient['id']) => void
}

const createPatient = (patient: DraftPatient) : Patient => {
  return {...patient, id: uuidv4()}
}

export const usePatientStore = create<PatientState>((set, get) => ({
    patients: [],
    activeID: '',
    addPatient: (data) => {
      const newPatient = createPatient(data)
      set((state) => ({
        patients: [...state.patients, newPatient]
      }))
    },

    deletePatient: ( id ) => {
      set((state) => ({
        patients: state.patients.filter( patient => patient.id !== id)
      }))
    },

    getPatientById: (id) => {
      console.log(id)
    }
}))