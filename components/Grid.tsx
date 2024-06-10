import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'
import styles from './ui/Grid.module.css'

const Grid = () => {
  return (
    <section id='about' className={styles.testFont}>
        <BentoGrid className="w-full py-20 font-['Space_Grotesk']">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>

    </section>
  )
}

export default Grid
