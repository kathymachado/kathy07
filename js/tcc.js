document.addEventListener('DOMContentLoaded', () => {
    const memberForm = document.getElementById('memberForm');
    const memberList = document.getElementById('memberList');

    memberForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const role = document.getElementById('role').value;

        if (name && role) {
            addMember(name, role);
            memberForm.reset();
        }
    });

    function addMember(name, role) {
        const li = document.createElement('li');
        li.textContent = `${name} - ${role}`;
        memberList.appendChild(li);
    }
});
