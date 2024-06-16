export default () => (`
  
    <p class="title">Gestion des dépenses</p>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Description</th>
          <th>Montant</th>
          <th>Catégorie</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr id="expense-1">
          <td>Loyer</td>
          <td>500€</td>
          <td>Logement</td>
          <td><button class="delete-expense-btn" data-expense-id="1">Supprimer</button></td>
        </tr>
        <tr id="expense-2">
          <td>Électricité</td>
          <td>100€</td>
          <td>Factures</td>
          <td><button class="delete-expense-btn" data-expense-id="2">Supprimer</button></td>
        </tr>
        <tr id="expense-3">
          <td>Courses</td>
          <td>150€</td>
          <td>Alimentation</td>
          <td><button class="delete-expense-btn" data-expense-id="3">Supprimer</button></td>
        </tr>
      </tbody>
    </table>
    <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="expenses">Ajouter dépenses</a>
        </li>
  
`);
// export default (expenses) => `
//   <div class="expenses-container">
//     <p class="title">Gestion des dépenses</p>
//     <table class="table table-striped">
//       <thead>
//         <tr>
//           <th>Description</th>
//           <th>Montant</th>
//           <th>Catégorie</th>
//           <th>Date de paiement</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         ${expenses.map(expense => `
//           <tr id="expense-${expense.id}">
//             <td>${expense.description}</td>
//             <td>${expense.amount}€</td>
//             <td>${expense.category}</td>
//             <td>${expense.due_date}</td>
//    <td><button class="delete-expense-btn" data-expense-id="${expense.id}">Supprimer</button></td>
//           </tr>
//         `).join('')}
//       </tbody>
//     </table>
//     <button id="add-expense-btn" class="btn btn-primary">Ajouter une dépense</button>
//   </div>
// `;
