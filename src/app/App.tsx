
import { Suspense } from "react"
import { AppRouter } from "./provider"

export default function App() {
  
  return (
    <Suspense fallback={<></>}>
   <AppRouter/>
    </Suspense>
  )
}