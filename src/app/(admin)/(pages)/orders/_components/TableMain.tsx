import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";

const TableMain = (props: any) => {
  const { orders } = props;
  const router = useRouter();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toTimeString().split(" ")[0];
  };

  const handleDetailsClick = (orderId: string) => {
    const detailsUrl = `/orders/${orderId}`;
    window.open(detailsUrl, '_blank');
  };

  return (
    <div>
      <Table>
        <TableCaption> A list of Orders </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Order Date</TableHead>
            <TableHead>Order Time</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Total</TableHead>
            <TableHead className="w-[200px] text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order: any) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">
                {formatDate(order.date)}
              </TableCell>
              <TableCell className="font-medium">
                {formatTime(order.date)}
              </TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.orderedUser.username}</TableCell>
              <TableCell>{order.orderedUser.mobile}</TableCell>
              <TableCell>LKR {order.orderedUser.total}.000</TableCell>
              <TableCell className="flex gap-4 justify-center">
                <button 
                  onClick={() => handleDetailsClick(order._id)}
                  className="px-4 py-2 rounded-md cursor-pointer bg-[#d49f4e] hover:bg-[#603809] text-[#fff] transition duration-150"
                >
                  Details
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableMain;
