import { motion } from "framer-motion";
import { DetailResource, BoxDetail } from './styledComponents'


const ResourceDetail = ({ setIsOpenAnimation, setSelected, data }) => {

  	return (
      	<DetailResource>
			<BoxDetail layoutId={`resource-${data.slug}`}>
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
					X
				</div>
				<motion.img
					className="primary-product-image"
					src={data.img.url}
					alt={data.titulo}
				/>
			</BoxDetail>
    	</DetailResource>
  	);
}

export default ResourceDetail;
