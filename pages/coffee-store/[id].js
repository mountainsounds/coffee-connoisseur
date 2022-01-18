import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
    const router = useRouter();
    return (
        <div>
            <h2>Welcome to the Coffee Store: {router.query.id}</h2>
            <Link href='/'><a>Go Back Home</a></Link>
        </div>
    )
}

export default CoffeeStore;