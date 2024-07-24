const Page = ({ params }: any) => {
  const { orderId } = params;

  return (
    <div>
      <h1>Order Details for {orderId}</h1>
    </div>
  );
};

export default Page;
