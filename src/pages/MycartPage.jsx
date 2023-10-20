import { useContext, useEffect, useState } from "react";
import { authContext } from "../authProvider/AuthProvider";
import CartItem from "../components/CartItem";

const MycartPage = () => {
    const {user} = useContext(authContext);
    const [myCarts, setMyCarts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4100/carts/${user?.uid}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMyCarts(data);
        })
    }, [])
    // console.log(setMyCarts);
    return (
        <div className="w-11/12 mx-auto min-h-[270px]">
            <h4 className="text-center mt-10 text-2xl font-semibold text-gray-700">Your Cart Items</h4>
            {
                myCarts.length > 0 ? <div className="grid grid-cols-3 gap-5 mt-14">
                  {
                    myCarts.map(cart => <CartItem myCarts={myCarts} setMyCarts={setMyCarts} cart={cart} key={cart._id}></CartItem>)
                  }
                </div> : 
                <div className="flex items-center justify-center min-h-[300px]"><h3 className="text-2xl font-semibold">Your Cart is empty currently</h3></div>
            }
        </div>
    );
};

export default MycartPage;