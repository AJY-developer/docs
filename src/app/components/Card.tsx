// components/Card.js
import Image from 'next/image';
import Link from 'next/link';


export default function Card({ card }: { card: card_data[] }) {
  return <>
    {card.map(e => {
      return (
        <Link href={`/maindata/${e.topic_name}`} key={e.topic_name}>
          <div className="card" key={e.topic_name}>
            <Image
              src={e.topic_image}
              alt={e.topic_name}
              width={60}
              height={60}
            />
            <h3 className="heading-text capitalize" key={e.topic_name}>{e.topic_name}</h3>
          </div>
        </Link>
      )
    })}
   
  </>
}


