import Detail from './Detail'

export default async function DetailContainer(props) {
    const res = await fetch(`https://dummyjson.com/products/${props.params.id}`)
    const result = await res.json()

    return <Detail data={result} />
}