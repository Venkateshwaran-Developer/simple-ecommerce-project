import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Rating 
  } from "@material-tailwind/react";
  import './ProductCard.css';
  import { Link} from 'react-router-dom';
   
  export default function ProductCard({theme,product}) {
    return (
    <div className={ ` container flex ${theme}  justify-center`}>
      <div className={ ` card   ${theme}`} >
        <div className="">
      <Card className={` w-80 h-120 ${theme}`}>
        <CardHeader color="blue-gray" className="relative">
          <img
            src={product.images[0].image}
            alt="card-image"
            className="w-[18rem] h-[12rem] "
          />
        </CardHeader>
        <CardBody className={`${theme}`}>
          <Typography variant="h5" color="blue-gray" className="mb-1">
          <Link to={'/product/'+product._id}>{product.name}</Link>
          </Typography>
          <Typography className=" text-gray-800" variant="h5">Rs.{product.price}</Typography>
          <Typography className="my-1">
            {product.description}
          </Typography>
          <div className="my-1 flex items-center gap-2">
            <Rating value={4} className="text-amber-500" />
            <Typography className="!text-sm font-bold !text-gray-900">
              4.0/5 (100 reviews)
            </Typography>
          </div>
          <div className="flex  text-gray-900">
          <Typography color="gray" variant="h6">
            Status :     
          </Typography>
          <p><span className={product.stock == 0 ?'text-red-900 px-1 font-bold text-md': 'text-green-900 px-1 font-bold text-md'}>{product.stock > 0 ? 'In Stock':'Out Of Stock'}</span></p>
          </div>
        </CardBody>
        <CardFooter className={`pt-0 pb-5 ${theme}`}>
          <Link to={'/product/'+product._id} id="view_btn" className="btn btn-block"><Button>View Details</Button></Link>
        </CardFooter>
      </Card>
      </div>
      <div>
      
      </div>
      </div>
      </div>
    );
  }