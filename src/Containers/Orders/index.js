import React, { useState, useEffect } from "react";

//imgs
import Logo2 from '../../assets/Logo2.png';
import Trash from '../../assets/trash.png'
//

//components
import H1 from '../../Components/Title/'
import Button from '../../Components/Button'



import { Container, Img, Order, OrderDiv, OrderType, OrderName } from "./styles";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';




const Orders = () => {



  const [orders, setOrders] = useState([]);
  const navigate = useNavigate()



  useEffect(() => {

    async function fetchOrders() {
      const { data: newUsers1 } = await axios.get(

        "http://localhost:3001/orders")

      setOrders(newUsers1);
    }

    fetchOrders()

  }, [])

  function goBackPage() {
    navigate("/")
  }


  async function deleteUser(orderId) {

    await axios.delete(`http://localhost:3001/orders/${orderId}`);
    const newUsers1 = orders.filter((order) => order.id !== orderId)

    setOrders(newUsers1);
  }


  return (

    <Container>

      <Img alt="logo" src={Logo2} />

      <H1>Orders</H1>

      <ul>

        {orders.map((order) => (

          <Order key={order.id}>



            <OrderDiv>

              <OrderType>
                <p>{order.order} </p>
              </OrderType>

              <OrderName><p>
                {order.clientName}
              </p></OrderName>

              </OrderDiv>

              <button onClick={() => deleteUser(order.id)}>

                <img src={Trash} alt="trashcan"></img>

              </button>
          

          </Order>

        ))}


      </ul>


      <Button isBack={true} onClick={goBackPage} >
        Back
      </Button>




    </Container>)
};

export default Orders;

// key - needed for specified each item of the list, that's why is close to id.
// State - a var which allow show items on the app, if we try to show a sample var on the screen, the react won't show the var