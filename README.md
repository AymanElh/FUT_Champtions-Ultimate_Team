# FUT Champions - Web App Ultimate Team


## Overview

The **Football Team Management App** is a web application that allows users to manage a football team. Users can create, edit, and delete players, assign positions, select formations, and manage substitutions. The app supports local storage to persist data and provides an intuitive drag-and-drop interface for switching players between the main lineup and the substitutes.

---

## Features

### 1. **Add Player**
- Users can add new players to the team with details such as:
  - Name
  - Photo
  - Nationality
  - Club
  - Position (e.g., GK, Defender, Midfielder, Forward)
  - Player statistics (e.g., speed, shooting, reflexes)
- The form ensures players are added to the correct position based on the team formation.

### 2. **Edit Player**
- Users can modify player information:
  - Update statistics
  - Change the player's name, photo, or position
- Validations ensure the updated details are consistent with the team setup.

### 3. **Delete Player**
- Players can be removed from the team.
- Both main lineup players and substitutes can be deleted.
- Confirmations help prevent accidental deletions.

### 4. **Select Formation**
- The app supports multiple formations, such as:
  - 4-4-2
  - 4-3-3
  - 3-5-2
- The user can dynamically switch between formations, and the UI updates accordingly.

### 5. **Form Validation**
- **Goalkeeper Validation**: Ensures only one goalkeeper is added to the main lineup.
- **Position Validation**: Players must be added to a position consistent with the team formation.
- **General Validation**: Ensures all required fields (e.g., name, photo, position) are filled before adding or editing a player.
- Alerts notify users of validation errors.

### 6. **Switch Players**
- **Main Lineup ↔ Substitutes**: Players can be switched between the main lineup and substitutes.
- The switch respects position constraints (e.g., a defender cannot replace a goalkeeper).
- Updated player statuses are reflected in the app.

### 7. **Local Storage Integration**
- Team data is saved in the browser's local storage:
  - Player details
  - Team formation
  - Substitutes
- Data persists across page refreshes and browser sessions.

### 8. **Drag and Drop**
- Drag players between the main lineup and substitutes:
  - Supports swapping filled positions.
  - Handles adding players to empty substitute slots.
- Real-time updates ensure the UI reflects the changes instantly.

---

## How It Works

### Adding a Player
1. Click on the "Add Player" button.
2. Fill in the form with player details.
3. The app validates the form:
   - Ensures no duplicate players in the main lineup.
   - Confirms the player’s position matches the current team formation.
4. On successful validation, the player is added to the selected position.

### Editing a Player
1. Select a player card and click "Edit".
2. Update the player's details in the form.
3. The app validates the changes and updates the player card in the UI.

### Deleting a Player
1. Click on a player card and select "Delete".
2. Confirm the deletion.
3. The player is removed from the lineup or substitutes list.

### Switching Players
1. Click on a main lineup player to select them.
2. Click on a substitute player to swap their positions.
3. The app validates the switch (e.g., matching positions).
4. On success, the two players are swapped, and their statuses are updated.

### Drag and Drop
- Drag a player card from the main lineup and drop it on a substitute card.
- The app validates the drop:
  - If the target substitute slot is empty, the player is moved.
  - If the slot is filled, the players are swapped.

### Managing Formations
- Use the "Formation Selector" to choose a formation.
- The UI dynamically adjusts to display positions based on the selected formation.
- Players remain in their assigned positions unless manually moved.

---

## Technical Details

### Technologies Used
- **HTML, CSS, JavaScript** for the frontend.
- **Local Storage** for persistent data storage.

### Code Highlights
1. **Validation Functions**:
   - `validatePosition(player1, player2)`: Ensures players in a swap have matching positions.
   - `generalValidation()`: Verifies form completeness.
   - `goalKeeperValidation()`: Enforces the one-goalkeeper rule.

2. **Drag-and-Drop Logic**:
   - `dragstart` event: Captures the player card being dragged.
   - `drop` event: Handles player swapping or assignment to empty slots.
   - Position validation ensures swaps are consistent with the team setup.

3. **Local Storage Management**:
   - Data is saved and retrieved using `localStorage.setItem()` and `localStorage.getItem()`.
   - The app re-renders the lineup and substitutes on page refresh based on stored data.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/football-team-management.git
   ```
2. Open `index.html` in a browser.

---

## Future Enhancements

- **Server Integration**:
  - Use a backend API to sync team data across devices.
- **Real-Time Updates**:
  - Add WebSocket support for multi-user collaboration.
- **Statistics Dashboard**:
  - Provide analytics and visualizations for player statistics.

---

## Conclusion

This app is a comprehensive tool for managing a football team. Its user-friendly interface, robust validation, and seamless drag-and-drop functionality make it ideal for football enthusiasts and team managers alike.