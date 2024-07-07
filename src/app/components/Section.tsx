import Card from "./Card"

export default function Section({ data, }: { data: allData[] }) {
    return (
        <>
            {data.map(e => {

                return (
                    < >
                        <h3 className="big-heading-text capitalize" key={e.category}>{e.category}</h3>
                        <div className="subContainer flex flex-wrap">
                            <Card card={e.card_data} />
                        </div>
                    </>
                )
            })}

        </>
    )
}
