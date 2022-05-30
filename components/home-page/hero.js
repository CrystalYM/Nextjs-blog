import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src='/images/site/me.png'
					alt='profile image'
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, Im Crystal</h1>
			<p>I like to write react/nextjs code </p>
		</section>
	);
}

export default Hero;
