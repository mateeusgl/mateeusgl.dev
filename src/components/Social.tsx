import styles from './Social.module.css'

type SocialProps = {
	social : {
		name: string;
		url: string
	}[]
}

export function Social({ social }: SocialProps) {
	return (
		<div className={styles.container}>
      <ul>
        {social.map(({ name, url }) => (
          <li key={name}>
            <a
              href={url}
              rel="noreferrer"
              target="_blank"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
	)
}