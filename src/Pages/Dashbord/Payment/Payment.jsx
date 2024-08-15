import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATWAY_PK);

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading='Please Pay to eat' />
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutFrom></CheckOutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;