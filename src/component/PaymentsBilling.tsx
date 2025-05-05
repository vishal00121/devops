import Check from "../icon/Check";
import Home from "../icon/Home";
import Payments from "../icon/Payments";
import PaymentsItem from "./PaymentsItem";

function PaymentsBilling() {
  return (
    <>
    <main className="flex flex-col">
        <div className="flex flex-col items-start gap-6 py-10 px-6">
            <h2 className="text-headerText text-[1.75rem] font-semibold leading-[2.45rem]">Billing</h2>
            <div className="flex gap-6 border-b w-full">
                <div className="text-base md:text-xl font-semibold hover:text-hoverText border-b-2 border-[#002B5B] pb-2 text-headerText transition">Billing Management</div>
                <div className="text-base md:text-xl font-semibold hover:text-hoverText text-[#1c1b1f99]">Payment History</div>

            </div>
        </div>
        <div>
          <div className="max-h-screen bg-gray-50 flex items-center justify-center">
            <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">

                    <Payments></Payments>
                    <h2 className="text-3xl font-bold text-gray-900">Premium Plan</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                  Unlock the full potential of our platform with unlimited meetings, advanced features, and enterprise-grade support.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <p className="text-4xl font-extrabold text-blue-900">INR 10

                    <span className="text-lg text-gray-600 ml-2">/month</span>
                    </p>
                  </div>
                  <div className="space-y-3">
                    <PaymentsItem name= "Unlimited Meeting" icons={<Home/>}/>
                    <PaymentsItem name= "No Time Restrictions" icons={<Home/>}/>
                    <PaymentsItem name= "Enterpise-Grade Features" icons={<Home/>}/>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h3>
                  <ul className="space-y-3">
                    <li><PaymentsItem name="Unlimited users in meetings" icons={<Check/>}/> </li>
                    <li><PaymentsItem name="Unlimited meeting duration" icons={<Check/>}/></li>
                    <li><PaymentsItem name="Priority dedicated support" icons={<Check/>}/></li>
                    <li><PaymentsItem name="Advanced meeting analytics" icons={<Check/>}/></li>
                    <li><PaymentsItem name="Custom branding options" icons={<Check/>}/></li>
                  </ul>
                  <div className="mt-6 bg-green-100 text-green-800 p-4 rounded-lg text-center">You are currently subscribed to the Premium Plan</div>
                </div>

              </div>
            </div>

          </div>
        </div>

    </main>
    
    </>
  )
}

export default PaymentsBilling;