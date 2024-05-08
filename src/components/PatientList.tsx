import { usePatientStore } from "../store"

export default function PatientList() {

  const patients = usePatientStore(state => state.patients)

  console.log(patients)

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <p>Si hay Pacientes</p>
      ) : (
        <>
        <h2 className="font-black text-3xl text-center">
          No hay Pacientes
        </h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Comienza agregando pacientes {''}
          <span className="text-indigo-600 font-bold">
            y aparecerán en este lugar
          </span>
        </p>
        </>
      )}
    </div>
  )
}
