## Style guide

This file includes general style guide for development, as well as branches management rules for developers/contributors.

### Code styles

Creating a coding style guide can help maintain consistency, readability, and maintainability in your codebase. Let's break down the into following perspectives:

#### Variable Naming
Use Meaningful Names: Choose names that reflect the purpose of the variable and are meaningful in the context of its use.
Follow a Naming Convention:
Camel Case: Start with a lowercase letter and capitalize subsequent words (e.g., employeeName).
Snake Case: Separate words with underscores and use all lowercase letters (e.g., employee_name).
Be Consistent: Stick to one naming convention throughout your project.
Use Singular and Plural Names Appropriately: Use singular names for single entities (e.g., user) and plural names for collections or arrays (e.g., users).
Avoid Abbreviations and Single-letter Names: Except for common conventions (e.g., i for loop counters) or widely understood abbreviations.

#### Function Style
Function Naming: Similar to variable naming, function names should be descriptive and reflect what the function does. Use action-based names (e.g., calculateTotal, fetchUserData).
Parameter Number: Aim for a small number of function parameters. Three or fewer is ideal. If more are needed, consider passing an object.
Function Length: Keep functions short and focused. A good rule of thumb is that a function should fit on a screen without scrolling.
Single Responsibility: Each function should do one thing and do it well. If a function is doing more than one task, consider breaking it down into smaller functions.

#### Use of Helper Functions
Decompose Complex Tasks: Break down complex tasks into smaller, manageable pieces using helper functions. This enhances readability and reuse. Generally, if your function exceeds 100 lines, consider breaking it into helper functions.
Naming: Name helper functions clearly to indicate their purpose or the specific task they perform.
Scope: Keep helper functions scoped to the needs of your main functions. If a helper function is used only by one function, consider nesting it or keeping it private to that module.

#### Comments
Usefulness: Write comments to explain "why" something is done, not "what" is done. The code itself should be self-explanatory for the "what".
Maintenance: Keep comments up-to-date. Outdated comments are worse than no comments.
Code Blocks: Use comments to organize code into logical blocks.
Documentation: For functions, use comments to explain the purpose, parameters, return values, and any side effects.
Avoid Overcommenting: Don't clutter your code with obvious comments; it reduces readability.

#### General Tips
Consistency: The most important aspect of a style guide is consistency. Stick to the chosen conventions throughout the project.
Adaptability: Be willing to adapt the style guide as the project evolves or as you learn from experience.
Team Agreement: If working in a team, ensure all members agree on the style guide to ensure a cohesive codebase.
Use Linters: Implement linters and formatters in your development environment to automatically enforce these style guidelines.

### Branch management

#### Name Conventions

Use clear, descriptive names for your branches. Include the type of branch, issue or ticket ID, and a short description.

- Feature branches: feature/issue-123-add-login
- Bug fixes: fix/issue-456-fix-login-error
- Releases: release/1.2.0
- Hotfixes: hotfix/issue-789-fix-security-vulnerability

#### Keep Branches Short-Lived

Merge feature branches into the main development line (e.g., develop) as soon as the feature is complete and has passed all tests. This minimizes merge conflicts and integration issues.

#### Code Reviews

Enforce code reviews before merging. This ensures at least one other team member has reviewed the code, improving code quality and team knowledge sharing.

#### Delete Branches After Merging

Delete feature branches immediately after merging them into the main line to keep the repository clean and manageable.

### Development Cycle

1. Create your branch following branch pattern e.g. `feature/login`
2. Develop and test locally making sure things correct and push changes to local branch.
3. Merge `Main` Branch into your local branch and resolve conflicts if any.
4. Send out a Pull Request for mering into main branch.
5. Delete the branch if this `feature/login` is finished.
