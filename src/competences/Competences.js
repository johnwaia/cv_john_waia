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
            <div
              style={{
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5px',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src={
                  custom
                    ? icon
                    : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`
                }
                alt={name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
            <span style={{ marginTop: '8px', textAlign: 'center' }}>{name}</span>
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

  const burautiqueSkills = (
  <>
    <Section
      title="Compétences Bureautique"
      items={[
        {
          name: 'Word',
          icon: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEBANDw8QDg8PExAQEA4NDQ8QDw4QGBEaFhUdExYYHSggGBolGxYULTEhJSktLi4uIx8zOzMtNygtLisBCgoKDg0OGxAQGi0fHyUtNS0vLS0tLS0tLSsrKy8tLS0tLS0tLS0tLS0rLS0rLS0tKystKy0tLS0rLS0tLS0rLv/AABEIANkA6QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIFBgcIBAP/xABHEAACAQIBBwcFDgYBBQEAAAAAAQIDEQQFEhMUMXGRBgchQVFSYTKBobHBFSIjNFRicpKUorKz0vAXNUJDU4LDM4PC0/EW/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAQFAQIDBv/EADIRAQACAAQDBQgCAgMBAAAAAAABAgMEERIhMVEFE2GR8DIzQVKBocHhsfEi0RQVcST/2gAMAwEAAhEDEQA/AN4gAAAAAA+OMxEaVOdWfk04uTttsl1eJtSk3tFY+LS94pWbT8GscqZYr4mTlObUX5NKMmoRW7rfiz0WDl6YUaVj6/F5zGzOJizraeHT4LednAAAAAAAAAAAAAAAAAAAAAAAu2RcvVsNNe+lOl0Z9KTbWb82+xkbHytMWOWk9UrL5u+FbnrHT/TYfunQ/wAseJR9zidF931Or1nJ1AAAAAAtHKz4nX3R/GiVk/f19fBFzvuLevi1kegecAAAAAAAAAAAAAAAAAAAAAAAACrPfa+I0hnWW4jyr1gAAAAAFo5WfE6+6P44krJe/r6+CLnfcW9fFrI9A84AAAAAAAAAAAAAAAAAAAAAAAAADch5V60AAAAAC0crPidfdH8cSVkvf19fBFzvuLevi1kegecAAAAAAAAAAAAAAAAAAAAAAAAABuQ8q9aAAAAABaOVnxOvuj+OJKyXv6+vgi533FvXxayPQPOAAAAAAAAAAAAAAAAAAAAAAAAAA3IeVetAAAAAAs3K+VsFXfhD8yJJyfvq+vgjZz3FvXxau077EX+557aad9iG42mnfYhuNpp32Ibjaad9iG42mnfYhuNpp32Ibjaad9iG42pjW7egzuYmr6mWoAAAAAAAAAAAAAABceWvLivKtUwuEm6NKlJwnVh/1Ks07StL+mKfZ0u172IGUyNIrF8SNZn4dFzmM1abTWk6RDEHlnGfK8V9qr/qJ/c4fyx5Qid5f5p85R7s4v5XivtVf9Q7nD+WPKDvL/NPnJ7s4z5XivtVf9Q7nD+WPKDvL/NPnKPdnF/K8V9qr/qHc4fyx5Qd5f5p85PdnGfK8V9qr/qHc4fyx5Qd5f5p85UVcq4qacZ4nETi9sZ4mrKL3puzMxhYcTrFY8oYm9pjSZnzl5tNPvy+szfSGukGmn35fWY0g0g00+/L6zGkGkI00+/L6zGkGkGnn35fWY0g0hGmn35fWY0g0g00+/L6zGkGkGtVI++VSXR2ybXBkfGw5iN1W9YieEwumBynCpHpaUl0NWdt6NaW3Q5Xw5rK40sZTsvfehnaI4OM1nVXrdPvLgzOjG2TW6feXBjQ2ya3T7y4MaG2TW6feXBjQ2ya3T7y4MaG2TW6feXBjQ2ya3T7y4MaG2TW6feXBjQ2ya3T7y4MaG2TW6feXBjQ2ya3T7y4MaG2TW6feXBjQ2ya3T7y4MaG2WNSk2230t9LfazdKUhgAgABBkAIAAQGQABAACmp5L3P1Gt/Zn/xmvN8sl+VLd7SFg85dcXkvNLYv31kyvJFnmrNmAAAAAAAAAAAAAAFvDogABAAyIAAQADIBAAABBkU1Nj3P1Gt/ZlmOb55L8qW72kHB5y64vJeaWxfvrJleSLPNWbMAAAAAAAAAAAAAALcHQAy7ktyI90KGsRxapNTlTlTeHc81qz2562pxezrIOZz3cX2zXX6/pLwcr3td27T6ft78oc2NSlSq1o4xVHThOaprCuLm4xbtfSO17bbHKnadbWiu3TXx/Te2RmKzO7X6ftgFy0QQC+8keTUspVKlONVUY0oKcpunpOlytFWzlt99036iNmszGBWJmNdXfAwJxZmNdNGU/wol8vj9jf/ALCF/wBrHyff9JP/AAJ+b7ftifK3k7LJ1aFGVTTKdNVI1FT0a8ppq13ssuvrROy2YjHrNojTijY2DOFbSZ1WMkOKJOyv2GTk2NR5qpuMZPGxi2k3HVG81tdKvpOkqJ7ViJ9j7/pPjIT832/axcsOR3ubTp1HilXlVm4KCoaOyUW2757+arW6yVlc539pjbpp4/pxx8v3UROuv0YqTUZTU2Pc/Ua39mWY5qMl+VLd7SDg85dcXkvNLYv31kyvJFnmrNmAAAAAAAAAAAAAAFtMugBsfmdxvTisM3tVOtFcYT/4yo7Vpwrf6evusMhb2q/X19my5JNNPpT6GinWTnLH4XQ1qtB/2alSl09ebNx9h62lt9Yt1jV5+1dszXo+Bsw2vzQYLNw1fENdNaqoJ9sKcej70plJ2pfXEivSP59Qs8jXSk26z/DPirTmveeHBZ1DD4lLppVJU34RqRv0+eC4lr2XfS9qdY18v7QM9X/GLdPy1WXSte3IWF0+Kw1C11UrUoyXzM9Z33bnPGtsw7W6RLfDruvEeLok8ovmo+eDG5+Lo0Fso0nJ/SqS6fRCHEvey6aYc26z/H9qvPW1vEdI/n+mBXLNCUz2Pc/Ua39mWY5qcl+VLd7SDg85dcXkvNLYv31kyvJFnmrNmAAAAAAAAAAAAAAFsMugBkvNzjdDlGh02jWU6Mv9o3j96MCHn6bsCfDj6+iTlLbcWPHg3eecXLR/OPhNFlKv1KqqdaPngk/vRkejyF92BHhwU2brpiz48WMtkxHb75FYLQZPwtO1m6aqST2qVT4SV/PJnmc3ffjWnx/jgu8vTbhVh9MLlLPx+Jwt+ilQw00vnSlVz/RojW2Hpg1v1mfx+2YvriTXwj8vjy4wOnyfiqaV5Km6sUtudTekVt+bY2yd9mNWfHTz4MZiu7CmPXBoS56dSMs5sMLpMpU5dVGFWr93Rr01EQe0bbcCfGYj8/hJyldcWPDj+Py3YedXDn7ljjdPj8XV2rSyhH6NP4NW35tz1GVpswax4fzxUePbdiWnx/jgsxIc1M30PczW/syzHNGS/Klu9pBwecumLyXmlsX76yZXkizzVmzAAAAAAAAAAAAAAC1mXQDL6YXEulUp1o+VSnCpHfGSkvUYtXdE1n48CJ2zE9HR1GopxjOLvGSUk+1NXR5KY0nSXoYnVrHnjwlqmFxCXlQqUpP6LUo/imXPZV/8bV+vr7K3P141t9GBZOwjr1qOHV/hqlOn0dSlJRb8yZZ4l9lZt0jVCrXdaK9XRsYpJJdCXQl2I8kv2rMhZZzuUNed/e15VsNfqtCKUX53RXEusbB0yUR00nz/ALVmHif/AEzPXh5f02nKKaaaun0NdqKVZucMpYR4etWw7v8AA1KlPp2tRk0n50ketw776RbrGqgtXbaa9GweZnC++xeIa2KlSi/rSl/4FX2rfhWv/s+vunZCvtW+jYeV8asPh6+If9mnUqb82LaXoKnCpvvFesp97bazbo5wu+t3fW3tb6z1qhRcCmb6HuZrf2ZZjmnJflS3e0g4POXTF5LzS2L99ZMryRZ5qzZgAAAAAAAAAAAAABazLqAQBvTm/wAbpsnYaXXTi6L/AO3JwXoSfnPN52mzHt5+fFdZW27Cjy8lv518JpMnup10KtKp5m9G/wAfoOvZt9MbTrH7/Dnna64WvSf0wTmxwelyjSk9lCFSs+zZmL0zT8xZdoX24Ex14fn8IWUrrix4cW48qYtUKFbEPZRp1Kj/ANYt+woMOm+8V6zotr221m3Rzzk/Gyo1qWJu3KlUhVfbJxmpPjZnqr0i9Zp1jRQ1tNZi3Ti6PhJNJp3TSaa60eSegaT50cFosozmtmIhTrLsvbRy9ML+c9F2dfdgRHTh+fyqM3XTF16s75p8Jo8nKp116tWp5k9Gvyyt7Svrj6dIj/f5TMnXTC16qudXHaLJ04J2eIqU6St2Xz5ea0GvOY7Opux4npx/DOctphadWk7noVSgMqKjsnufqNb+zLMc3yybikpS6Hs7fEhYEcZdcWvBd6eOVvJfFE2scEWa8VWvLuvijOjG015d18UNDaa8u6+KGhtNeXdfFDQ2mvLuvihobTXl3XxQ0Npry7r4oaG015d18UNDaa8u6+KGhtNeXdfFDQ2mvLuvihobTXl3XxQ0Npry7r4oaG15Q3AAG0eZzG3pYrDP+icK0d045rt56a4lN2rTS1b/AE8v7WWQtwtX6+vJmfKTB6xg8TQXS6lGoo/TzW4+mxX5e+zFrbpKXi13UmvgwfmZwfvcVin/AFOnRj4WWfL8cOBY9q341p9ULIV4Wt9F950MbosnVIp2lXnTorxvLOl92EiN2dTdjxPTj6+rvnLaYU+PBpI9EqG/OQmO0+TsLUvdxpqlK+3Opt03ffm3855jOU2Y9o8dfPiu8vbdhRPrgxXnnwXwWFxS/tznRlunHOV9zpviTeyr/wCVqdePl/aNnq8IszTkvg9BgsLRatKFGkpL57inL0tlfmL78W1vFLwq7aRHg17zz469XC4VPyITrSXjJ5sPwT4lp2VT/G1/p6+yFnrcYr9Wty2QS4Hzqv3stz9Rrf2ZZrzh4sn7Xu9pEwOcu+LyXOnsJleSNKo2YAAAAAAAAAAAAAAfQ1EGQAy3mtxuiyjGDfRiKdSl4ZyWkX4GvOQO0absDXpOv4SsnbTF06t1HnlusHInJiwuFdJLN+HxTt4KvKEfuxiSc3i95ibvCP4/244FNlNPGf5YdzzY332EwyexVK0lwhD/AJCw7Kpwtf6evsiZ63s1+rWly3QG1+ZrHZ1DE4ZvppVI1V4RqRt0eeD4lJ2rTS9b9Y08v7WWRt/jNfXFk/LXJixeDnQ706HmWnjnfdziHlMXu8WLf+/wk49N9NvrmvpGdWhOcPHafKWJad405KhHwzIpS+/nnpcjTZgV8ePn+lPmbbsWfJjdyW4IuBRV8mW5+o1v7Mtq84ePJ+17vaQ8DnLti8lzp7CbXkjSqNmAAAAAAAAAAAAAAFZgQAA9WScbq+IoYj/DVp1HbuqScl51c0xab6TXrDalttot0dGp9Z5JfiSWxW2vo7W7sDRnOXjdNlKur3jRVOjH/WOdL70pHpMhTbgR48VPmrbsWfDgxa5MR2Z80+O0WUFSb6MRSqU7dWfH4SPojPiV/aVN2Dr0n9JeTtpiadW6Wr7Tz61fPF4iNKnOrN2jTjKcn2Rirv0I2rWbTER8WJnSNXM9evKpKVWfl1JSnL6Und+ls9bERWNI+Ci114y+ZkAKKr97Lc/Ua39mWa83kyfte72kPA5y64nJc6ewm15I8qjZgAAAAAAAAAAAAABUYEXAgCGGW0Mk86GHpUKNKrQxE6lOnThOcdFmzlGKTavJbbFNidmXteZrMaTPisaZ2sViJidXq/ixg/k2K4Uf1mn/AFWJ80ff/Tb/AJ1Ok/ZqrH4l1qtWvLbVqVKj8HKbl7S6pXbWK9I0V1p3TMvObMPZkbHvDYmhiVd6GpCbS2yipe+S3xuvOc8WneUmvWG1LbbRbo2h/FnB/JsVwofrKf8A6rE+aPv/AKWP/Np0lbOU3OVQxOEr4ajQrwqVoaNSqKlmKLaU72k35OcdcDs6+HiRe0xpH/rni5utqTWIni1mW6Ci4EXAoq7HufqNb+zLaObzZP2vd7SHgc5dMTkudPYTa8keVRswAAAAAAAAAAAAAAGADKLgRcCAIDJcCLgRcCAyi4EXAi4AMqKmx7n6jW/syzHN58n7Xu9pDwOcumJyXOnsJteSPKo2YAAAAAAAAAAAAAAGYZU3Ai4AMouBFwIuBAZLgRcCLgQGUARcCmo+h7n6jW/sy2jm+GT9r3e0h4HOW+JyXOnsJteSPKo2YAAAAAAAAAAAAAAZfy85HV8LXqYijTnVwtWUqilTi5Og5O7jNLZFO9nstZbSvyecpiUitp0tH3S8xl7UtMxGsSwt1F2riiw0lFRpI9q4oaSyjSR7VxQ0kRpI9q4oaSI0ke1cUNJBTXU0/OhpLKTAgCAAZQBAEMMvDjcYksyLTk9tulJEPMY8RG2vN2w8OZ4y+eCryTezZ2HHBtOstsSsaPfDFSt1cCXGJOjjNIVa3Lw4Ge8ljZBrcvDgO8k2Qa3Lw4DvJNkGty8OA7yTZBrcvDgO8k2Qa3Lw4DvJNkGty8OA7yTZBrcvDgO8k2Qa3Lw4DvJNkGty8OA7yTZBrcvDgO8k2Qa3Lw4DvJNkGty8ODHeSbIdUHlV2AAAAABiXOur5Gxy+ZT/ADoHXBjW8Q0vOlZczaCXhxLDu5RN0Ggl4cR3cm6DQS8OI7uTdBoJeHEd3Jug0EvDiO7k3QaCXhxHdyboNA/DiO7k3QqhRaNow9GJs9WHViRhxo52epEiHJIAAAAAAAAAAAAAAHV55hcAAAAAAYpzpfyjG/Qp/nQO+W97Dni+xLm/NLfRA1M0aGpmjQ1M0aGpmjQ1M0aGpmjQ1M0bTV6KVO287Uro0tOr6G7UAAAAAAAAAAAAAAA6vPMLgAAAAADF+c7+U4z6EPzYknKe+q5Y/u5c72L5WFgFgFgFgFgFgJAAAAAAAAAAAAAAAAAAHV55hcAAAAAAYvznfynGfQh+bEk5T31XHH93LngvlaAAAAAAAAAAAAAAAAAAAAAAAAADq88wuAAAAAAMX5zv5TjPoQ/NiScp76rlj+7lzwXysAAAAAAAAAAAAAAAAAAAAAAAABYDq88wuAAAAAAPDlzJscXhq+Em7Rr05U85K7i2uhrxTszfDvNLRaPg1tXdExLmzLeSMRga0sPiabpzV7PpzKse9Tl/VH/47PoPQ4eJXEruqq70mk6S8FzdrqXBqXBqXBqXBqXBqXBqXBqXBqXBqXBqXBqXBqXBqXBqXBqXBqXBqXBqXBqvHJfk7XylWjQoReZdaWvb4OhDrbey9tkdr4tcsbGrhV1t5OmHhzedIb2//E5P/wAK4lJ/yMTqsO7qyI4OgAAAAAADF+cT4m/pL1EjLe254nstPFqiAAAAAAAAAAAAAAAAAAAAAJQG7eRvxOluZT43tymU9lezk3f/2Q==',
          url: 'https://www.microsoft.com/microsoft-365/word',
          custom: true,
        },
        {
          name: 'Excel',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg',
          url: 'https://www.microsoft.com/microsoft-365/excel',
          custom: true,
        },
        {
          name: 'PowerPoint',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Microsoft_PowerPoint_2013-2019_logo.svg',
          url: 'https://www.microsoft.com/microsoft-365/powerpoint',
          custom: true,
        },
        {
          name: 'Outlook',
          icon: 'data:image/jpeg;base64,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',
          url: 'https://www.microsoft.com/microsoft-365/outlook',
          custom: true,
        },
        {
          name: 'Teams',
          icon: 'data:image/jpeg;base64,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',
          url: 'https://www.microsoft.com/microsoft-teams',
          custom: true,
        },
      ]}
    />
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
        <button
          className={activeTab === 'bureautique' ? 'active' : ''}
          onClick={() => setActiveTab('bureautique')}
        >
          Bureautique
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'informatique'
          ? informatiqueSkills
          : activeTab === 'batiment'
          ? batimentSkills
          : burautiqueSkills}
      </div>
    </div>
  );
}
