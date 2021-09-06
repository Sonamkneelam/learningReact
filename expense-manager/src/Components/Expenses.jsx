import { ExpenseItem } from "./ExpenseItem"
import './Expenses.css'
import { Card } from "./Card"

export function Expenses({items}){

    return(
        <Card className='expenses'>

            {items.map((e)=>(
                <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date}></ExpenseItem>
            ))}
        </Card>
    )
}