import { useState } from 'react';
import './competences.css';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('informatique');

  const Section = ({ title, items }) => (
    <div className="skill-section">
      <h4>{title}</h4>
      <div className="skill-grid">
        {items.map(({ name, icon, url, custom }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-item"
            title={name}
          >
            <img
              src={custom ? icon : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`}
              alt={name}
              style={{
                width: custom ? '120px' : '60px',
                height: custom ? '120px' : '60px',
                objectFit: 'contain'
              }}
            />

            <span>{name}</span>
          </a>
        ))}
      </div>
    </div>
  );

  const informatiqueSkills = (
    <>
      <Section title="Langages" items={[
        { name: 'Python', icon: 'python/python-original.svg', url: 'https://www.python.org/' },
        { name: 'HTML5', icon: 'html5/html5-original.svg', url: 'https://developer.mozilla.org/fr/docs/Web/HTML' },
        { name: 'CSS3', icon: 'css3/css3-original.svg', url: 'https://developer.mozilla.org/fr/docs/Web/CSS' },
        { name: 'JavaScript', icon: 'javascript/javascript-original.svg', url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript' },
        { name: 'C', icon: 'c/c-original.svg', url: 'https://en.cppreference.com/w/c' },
        { name: 'Java', icon: 'java/java-original.svg', url: 'https://www.oracle.com/java/' },
        { name: 'MySQL', icon: 'mysql/mysql-original.svg', url: 'https://dev.mysql.com/doc/' },
        { name: 'Go', icon: 'go/go-original.svg', url: 'https://golang.org/' },
        { name: 'Prolog', icon: 'prolog/prolog-original.svg', url: 'https://www.swi-prolog.org/' },
      ]} />
      <Section title="Frameworks" items={[
        { name: 'Django', icon: 'django/django-plain.svg', url: 'https://www.djangoproject.com/' },
        { name: 'Node.js', icon: 'nodejs/nodejs-original.svg', url: 'https://nodejs.org/' },
        { name: 'Angular', icon: 'angularjs/angularjs-original.svg', url: 'https://angular.io/' },
        { name: 'Flutter', icon: 'flutter/flutter-original.svg', url: 'https://flutter.dev/' },
        { name: 'React', icon: 'react/react-original.svg', url: 'https://reactjs.org/' },
        { name: 'Spring Boot', icon: 'spring/spring-original.svg', url: 'https://spring.io/projects/spring-boot' },
        { name: 'Bootstrap', icon: 'bootstrap/bootstrap-original.svg', url: 'https://getbootstrap.com/' }
      ]} />
      <Section title="Outils" items={[
        { name: 'Docker', icon: 'docker/docker-original.svg', url: 'https://www.docker.com/' },
        { name: 'Git', icon: 'git/git-original.svg', url: 'https://git-scm.com/' },
        { name: 'Eclipse', icon: 'eclipse/eclipse-original.svg', url: 'https://www.eclipse.org/' },
        { name: 'VS Code', icon: 'vscode/vscode-original.svg', url: 'https://code.visualstudio.com/' },
        { name: 'PyCharm', icon: 'pycharm/pycharm-original.svg', url: 'https://www.jetbrains.com/pycharm/' },
        { name: 'Android Studio', icon: 'androidstudio/androidstudio-original.svg', url: 'https://developer.android.com/studio' },
        { name: 'Postman', icon: 'postman/postman-original.svg', url: 'https://www.postman.com/' },
      ]} />
      <Section title="Système d'exploitation" items={[
        { name: 'Ubuntu', icon: 'ubuntu/ubuntu-plain.svg', url: 'https://ubuntu.com/' },
        { name: 'Debian', icon: 'debian/debian-original.svg', url: 'https://www.debian.org/' },
        { name: 'Windows', icon: 'windows8/windows8-original.svg', url: 'https://www.microsoft.com/windows' }
      ]} />

    </>
  );

  const batimentSkills = (
    <>
      <Section title="Compétences Bâtiment" items={[
        {
          name: 'AutoCAD',
          icon: 'https://eurostudio.fr/wp-content/uploads/2021/03/AutoCAD_Autodesk.jpg',
          url: 'https://www.autodesk.com/products/autocad/overview',
          custom: true
        },
        {
          name: 'Revit',
          icon: 'https://eurostudio.fr/wp-content/uploads/2019/01/Revit_LT_Autodesk-1.jpg',
          url: 'https://www.autodesk.com/products/revit/overview',
          custom: true
        },
      ]} />
    </>
  );

  return (
    <div className="skills">
      <div className="tabs">
        <button
          className={activeTab === 'informatique' ? 'active' : ''}
          onClick={() => setActiveTab('informatique')}
        >
          Informatique
        </button>
        <button
          className={activeTab === 'batiment' ? 'active' : ''}
          onClick={() => setActiveTab('batiment')}
        >
          Bâtiment
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'informatique' ? informatiqueSkills : batimentSkills}
      </div>
    </div>
  );
}
