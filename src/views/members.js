export default () => (`
  <h4>Colocation - Membres</h4>
  <table class="table table-striped">
      <thead>
          <tr>
              <th>Nom</th>
              <th>Âge</th>
              <th>Occupation</th>
              <th>Action</th>
          </tr>
      </thead>
      <tbody>
          <tr id="member-1">
              <td>Jean Dupont</td>
              <td>25</td>
              <td>Étudiant</td>
              <td><button class="delete-btn" data-member-id="1">Supprimer</button></td>
          </tr>
          <tr id="member-2">
              <td>Marie Curie</td>
              <td>28</td>
              <td>Ingénieure</td>
              <td><button class="delete-btn" data-member-id="2">Supprimer</button></td>
          </tr>
          <tr id="member-3">
              <td>Paul Martin</td>
              <td>30</td>
              <td>Développeur</td>
              <td><button class="delete-btn" data-member-id="3">Supprimer</button></td>
          </tr>
      </tbody>
  </table>
  `);
