export default () => (`
  <div class="dashboard-container">
    <p class="titre">Tableau de bord</p>
    <div class="dashboard-section">
      <p class="section-titre">Tâches attribuées</p>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Statut</th>
            <th>Priorité</th>
            <th>Date limite</th>
          </tr>
        </thead>
        <tbody>
          <tr id="task-1">
            <td>Nettoyer la cuisine</td>
            <td>En cours</td>
            <td>Haute</td>
            <td>2023-06-20</td>
          </tr>
          <tr id="task-2">
            <td>Faire les courses</td>
            <td>Terminé</td>
            <td>Moyenne</td>
            <td>2023-06-18</td>
          </tr>
          <tr id="task-3">
            <td>Payer le loyer</td>
            <td>À faire</td>
            <td>Haute</td>
            <td>2023-06-25</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="dashboard-section">
      <p class="section-titre">Dépenses à payer</p>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Montant</th>
            <th>Catégorie</th>
            <th>Date de paiement</th>
          </tr>
        </thead>
        <tbody>
          <tr id="dashboard-expense-1">
            <td>Loyer</td>
            <td>500€</td>
            <td>Logement</td>
            <td>2023-06-30</td>
          </tr>
          <tr id="dashboard-expense-2">
            <td>Électricité</td>
            <td>100€</td>
            <td>Factures</td>
            <td>2023-06-25</td>
          </tr>
          <tr id="dashboard-expense-3">
            <td>Courses</td>
            <td>150€</td>
            <td>Alimentation</td>
            <td>2023-06-20</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`);
// const viewDashboard = (data) => {
//   const { tasks, expenses } = data;

//   return `
//     <div class="dashboard-container">
//       <p class="titre">Tableau de bord</p>
//       <div class="dashboard-section">
//         <p class="section-titre">Tâches attribuées</p>
//         ${viewTache(tasks)}
//       </div>
//       <div class="dashboard-section">
//         <p class="section-titre">Dépenses à payer</p>
//         ${viewExpenses(expenses)}
//       </div>
//     </div>
//   `;
// };

// export default viewDashboard;
