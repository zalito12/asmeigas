import Link from "next/link"
import Image from "next/image"

export interface SponsorCardProps {
    name: string
    image: string
    link?: string
}

export function SponsorCard(props: SponsorCardProps) {
    const { name, image, link } = props

    const imageElement = (
        <div className="mx-auto flex w-full items-center justify-center group">
            <Image
                src={image}
                width="250"
                height="250"
                alt={name}
                className="w-full aspect-[2/1] overflow-hidden rounded-lg object-contain object-center grayscale group-hover:grayscale-0"
            />
        </div>
    )

    if (link) {
        return (
            <Link
                href={link}
                target="_blank"
            >
                {imageElement}
            </Link>
        )
    }

    return imageElement
}

