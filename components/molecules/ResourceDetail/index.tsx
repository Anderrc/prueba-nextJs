import { motion } from "framer-motion";
import Image from "next/image";
import close from "../../../assets/img/close.svg";
import { DetailResource, BoxDetail, BoxLeft, BoxRight, Tag, Ribbon } from './styledComponents'

interface IPropsResource {
	data: {
        titulo: string,
        slug: string,
		descripcion: string,
		tipo?: [],
        img: {
            url: string,
        },
		recomendado: boolean,
	},
	setIsOpenAnimation: any,
	setSelected: any,
}

export const ResourceDetail = (props: IPropsResource) => {

	const {
		data,
		setIsOpenAnimation,
		setSelected
	} = props;

  	return (
      	<DetailResource>
			<BoxDetail layoutId={`resource-${data.slug}`}>
				{data.recomendado && (
					<Ribbon>
						<span>Recomendado</span>
					</Ribbon>
				)}
				<div
					className="close"
					onClick={() => {
						document.body.style.overflow = "auto";
						setIsOpenAnimation(false)
						setSelected({
							titulo: '',
							slug: '',
							img: {
								url: '',
							}
						});
					}}
				>
					<Image src={close} alt="icon-close" />	
				</div>
				<BoxLeft>
					<motion.img
						className="primary-product-image"
						src={data.img.url}
						alt={data.titulo}
					/>
				</BoxLeft>

				<BoxRight>
					<h2>{data.titulo}</h2>
					{data.tipo && 
						data.tipo.map((item, key) => (
							<Tag key={key}>{item}</Tag>
						))
					}
					<p>{data.descripcion}</p>
				</BoxRight>
			</BoxDetail>
    	</DetailResource>
  	);
}
