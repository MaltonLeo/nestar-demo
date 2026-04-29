import { useRouter } from "next/router";

const PropertyDetail = () => {
     const router = useRouter();
     const {productId} = router.query;
       console.log("Property LIst COMPONENT- PAGES ROUTER")
    return <div>PROPERTY DETAIL {productId}</div>
}

export default PropertyDetail;