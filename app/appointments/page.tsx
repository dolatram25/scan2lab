import About from "@/components/About";
import MyAppointments from "@/components/MyAppointments";


export default function AppointmentsPage() {
  return (
    <div className="w-[100vw]">
      <MyAppointments/>
      <About/>
    </div>
  );
}
