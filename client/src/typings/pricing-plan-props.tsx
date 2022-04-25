import { ButtonProps } from "@mui/material"

type PricingPlanProps = ButtonProps & {
    title: string,
    price: string,
    discount?: string,
    oldPrice?: string,
    newPrice?: string,
    frequency: string,
    selected: boolean,
}

export default PricingPlanProps;
