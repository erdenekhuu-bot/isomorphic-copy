import AppointmentStats from "./appointment-stats";
import UpcomingAppointmentTable from "./upcoming-appointment-table";
import AppointmentDiseases from "./appointment-diseases";
import Department from "./department";
import TotalAppointment from "./total-appointment";
import Patients from "./patients";
import PatientAppointment from "./patient-appointment";
import ScheduleList from "./schedule-list";
import AppointmentTodo from "./appointment-todo";

export default function AppointmentDashboard() {
  return (
    <div className="grid grid-cols-12 gap-6 @container @[59rem]:gap-7">
      <AppointmentStats className="col-span-full" />
      <TotalAppointment className="col-span-full @[90rem]:col-span-7" />
      <ScheduleList className="col-span-full @[59rem]:col-span-6 @[90rem]:col-span-5" />
      <AppointmentTodo className="col-span-full @[59rem]:col-span-6 @[90rem]:col-span-4" />
      <Patients className="col-span-full @[59rem]:col-span-6 @[90rem]:col-span-4" />
      <Department className="col-span-full @[59rem]:col-span-6 @[90rem]:col-span-4" />
      <UpcomingAppointmentTable className="col-span-full" />
      <PatientAppointment className="col-span-full @[59rem]:col-span-6 @[90rem]:col-span-7 @[90rem]:col-start-auto @[90rem]:row-start-auto" />
      <AppointmentDiseases className="col-span-full @[59rem]:col-span-6 @[90rem]:col-span-5" />
    </div>
  );
}
