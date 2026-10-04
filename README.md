# Nova Creative Portfolio

Nova Creative is a fictional portfolio website for a UI/UX designer and web developer. This project was created as an interactive web portfolio assignment using HTML, CSS, JavaScript, and JSON.

## Features

- Three-page website: Home, Portfolio, Contact
- Semantic HTML5 structure
- Responsive design for mobile, tablet, and desktop
- CSS Flexbox and Grid layouts
- Custom theme, typography, spacing, and styling
- CSS hover transitions and floating animation
- Mobile hamburger navigation
- Dark mode with localStorage
- Portfolio projects loaded dynamically from a JSON file
- Portfolio category filtering
- Contact form validation
- Required-field validation
- Email format validation
- Accessible labels and navigation attributes

## Project Structure

```text
nova-creative-portfolio/
│
├── index.html
├── portfolio.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   └── validation.js
│
├── data/
│   └── projects.json
│
├── images/
│   └── (add project/profile images here)
│
└── README.md
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- JSON
- CSS Grid
- CSS Flexbox
- Browser localStorage

## How to Run

### Recommended: VS Code + Live Server

1. Open the `nova-creative-portfolio` folder in Visual Studio Code.
2. Install the **Live Server** extension if needed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. Open the Portfolio and Contact pages using the navigation.

### Alternative: Python local server

If Python is installed, open a terminal inside the project folder and run:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

The JSON portfolio loader uses `fetch()`, so a local server is recommended instead of opening `portfolio.html` directly with `file://`.

## Adding Images

Place images inside the `images/` folder, for example:

```text
images/
├── profile.jpg
├── travel.jpg
├── food-app.jpg
└── business.jpg
```

Then update the `image` values in `data/projects.json`.

Example:

```json
{
    "title": "Travel Explorer",
    "category": "Web Design",
    "image": "images/travel.jpg",
    "description": "A clean travel website."
}
```

## Group Roles and Contributions

| Member | Role | Contribution |
|---|---|---|
| Member 1 | Project Manager | Coordinates tasks, meetings, and deadlines |
| Member 2 | HTML Lead | Builds semantic HTML pages and structure |
| Member 3 | CSS Layout Designer | Creates Grid, Flexbox, and responsive layouts |
| Member 4 | CSS Styling Designer | Manages colors, typography, spacing, and animations |
| Member 5 | JavaScript Functionality Developer | Builds navigation, dark mode, and portfolio functionality |
| Member 6 | JavaScript Validation Developer | Builds contact form validation and error handling |
| Member 7 | Content Manager | Prepares text, images, and portfolio project data |
| Member 8 | Testing & Documentation Lead | Tests the website and maintains project documentation |

Replace "Member 1", "Member 2", etc. with your actual group members' names.

## Testing Checklist

- [ ] Home page loads correctly
- [ ] Portfolio page loads JSON projects
- [ ] Portfolio filters work
- [ ] Contact form rejects empty fields
- [ ] Contact form rejects invalid email addresses
- [ ] Successful form validation displays a message
- [ ] Hamburger menu works on mobile
- [ ] Dark mode works and remembers the setting
- [ ] Hover animations work
- [ ] Layout works on mobile, tablet, and desktop
- [ ] Navigation links work
- [ ] No JavaScript errors appear in the browser console

## Important Note

This is a front-end demonstration project. The Contact form does not send information to a real server or email address. A real website would require a back-end service or form-handling provider.

## Presentation

The group presentation can demonstrate:

1. Project introduction
2. Home page and design
3. Portfolio and JSON data
4. Contact form validation
5. Mobile navigation
6. Dark mode
7. Responsive design
8. Group roles and contributions
9. Testing
10. Conclusion
