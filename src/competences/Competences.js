
import './competences.css';

export default function Skills() {
  const Section = ({ title, items }) => (
    <div className="skill-section">
      <h4>{title}</h4>
      <div className="skill-grid">
        {items.map(({ name, icon, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-item"
            title={name}
          >
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`}
              alt={name}
            />
            <span>{name}</span>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="skills">
      <Section title="Langages" items={[
        { icon: 'python/python-original.svg', url: 'https://www.python.org/' },
        { icon: 'html5/html5-original.svg', url: 'https://developer.mozilla.org/fr/docs/Web/HTML' },
        { icon: 'css3/css3-original.svg', url: 'https://developer.mozilla.org/fr/docs/Web/CSS' },
        { icon: 'javascript/javascript-original.svg', url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript' },
        { icon: 'c/c-original.svg', url: 'https://en.cppreference.com/w/c' },
        { icon: 'java/java-original.svg', url: 'https://www.oracle.com/java/' },
        { icon: 'mysql/mysql-original.svg', url: 'https://dev.mysql.com/doc/' },
        { icon: 'go/go-original.svg', url: 'https://golang.org/' },
        { icon: 'prolog/prolog-original.svg', url: 'https://www.swi-prolog.org/' },
      ]} />

      <Section title="Frameworks" items={[
        { icon: 'django/django-plain.svg', url: 'https://www.djangoproject.com/' },
        { icon: 'nodejs/nodejs-original.svg', url: 'https://nodejs.org/' },
        { icon: 'angularjs/angularjs-original.svg', url: 'https://angular.io/' },
        { icon: 'flutter/flutter-original.svg', url: 'https://flutter.dev/' },
        {icon: 'react/react-original.svg', url: 'https://reactjs.org/' },
        { icon: 'spring/spring-original.svg', url: 'https://spring.io/projects/spring-boot' },
        { icon: 'https://www.sfeir.dev/content/images/2024/09/Vaadin-Logo.wine.svg', url: 'https://vaadin.com/' }
      ]} />

      <Section title="Outils" items={[
        { icon: 'docker/docker-original.svg', url: 'https://www.docker.com/' },
        { icon: 'git/git-original.svg', url: 'https://git-scm.com/' },
        { icon: 'eclipse/eclipse-original.svg', url: 'https://www.eclipse.org/' },
        { icon: 'vscode/vscode-original.svg', url: 'https://code.visualstudio.com/' },
        { icon: 'pycharm/pycharm-original.svg', url: 'https://www.jetbrains.com/pycharm/' },
        { icon: 'androidstudio/androidstudio-original.svg', url: 'https://developer.android.com/studio' },
        {icon: 'postman/postman-original.svg', url: 'https://www.postman.com/' },
     ]} />
    </div>
  );
}
