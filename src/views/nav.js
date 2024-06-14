import Image from '../assets/img-colocation.png';

export default () => (`
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="home">
      <img src="${Image}" alt="Colocation Image" width="30" height="24">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="register">S'enregistrer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="expenses">Dépenses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="members">Members</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="tasks">Taches</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Actions
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="Compte_money">Compte(argent)</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Quitter la colocation</a></li>
          </ul>
        </li>
      </ul>
      <button class="Btn">
        <div class="sign">
          <svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg>
        </div>
        <div class="text">Logout</div>
      </button>
    </div>
  </div>
</nav>
`);
