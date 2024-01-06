import NextHead from 'next/head'

export default function HeadingComponent(): JSX.Element {
	return (
		<NextHead>
			<link rel="icon" type="image/jpg" href="/logo-raka.jpg" />
			<meta charSet="utf-8" />
			<meta name="author" content="joshuak21" />
			<meta name="description" content="Portfolio - Raka" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
			<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

			<title>Portfolio</title>
		</NextHead>
	)
}