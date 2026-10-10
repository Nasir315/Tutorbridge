const tutors = [
  { name: 'Aarav K.', initials: 'AK', course: 'B.E. Electronics, 3rd year', subject: 'Maths', grades: 'Class 8 to 10', price: '₹299', tint: '#E4EBFF', bio: 'Cleared JEE Main. Explains algebra with real examples and weekly practice sets.' },
  { name: 'Meera S.', initials: 'MS', course: 'MBBS, 2nd year', subject: 'Biology', grades: 'Class 9 to 12', price: '₹349', tint: '#FFE9B8', bio: 'NEET qualified. Diagrams first, then concepts, then quick revision quizzes.' },
  { name: 'Rohan P.', initials: 'RP', course: 'B.E. Computer Science, 2nd year', subject: 'Coding', grades: 'Class 6 to 10', price: '₹349', tint: '#D9F5E8', bio: 'Teaches Python and Scratch through small projects kids enjoy building.' },
  { name: 'Ishita D.', initials: 'ID', course: 'B.E. Mechanical, 3rd year', subject: 'Science', grades: 'Class 7 to 10', price: '₹299', tint: '#F6DCEB', bio: 'Physics and chemistry with simple experiments you can try at home.' },
  { name: 'Kabir N.', initials: 'KN', course: 'B.E. Electronics, 4th year', subject: 'Maths', grades: 'IGCSE, Class 9 to 10', price: '₹399', tint: '#E4EBFF', bio: 'Evening slots that suit students in the UK and Gulf time zones.' },
  { name: 'Sana R.', initials: 'SR', course: 'MBBS, 3rd year', subject: 'Science', grades: 'Class 6 to 9', price: '₹349', tint: '#FFE9B8', bio: 'Patient and friendly. Builds confidence in kids who find science scary.' }
];

const subjects = ['All', 'Maths', 'Science', 'Coding', 'Biology'];
let selected = 'All';

function render() {
  const chips = document.getElementById('chips');
  chips.innerHTML = '<b style="font-size:14px;color:var(--soft)">Subject</b>' +
    subjects.map(s => `<button class="chip ${s === selected ? 'on' : ''}" data-s="${s}">${s}</button>`).join('');
  chips.querySelectorAll('button').forEach(b => b.addEventListener('click', () => { selected = b.dataset.s; render(); }));

  const list = selected === 'All' ? tutors : tutors.filter(t => t.subject === selected);
  document.getElementById('list').innerHTML = list.map(t => `
    <div class="tutor">
      <div class="head">
        <div class="pic" style="background:${t.tint}">${t.initials}</div>
        <div><div style="font-weight:800;font-size:18px">${t.name}</div><div style="font-size:14px;color:var(--soft)">${t.course}</div></div>
      </div>
      <div class="row" style="gap:8px"><span class="tag g">ID verified</span><span class="tag b">${t.subject}</span><span class="tag">${t.grades}</span></div>
      <div style="color:var(--muted);line-height:1.5">${t.bio}</div>
      <div class="foot">
        <div><span class="price">${t.price}</span><span style="color:var(--soft);font-size:14px"> / hour</span></div>
        <a class="btn primary" style="padding:12px 18px;font-size:15px" href="dashboard.html">Book trial</a>
      </div>
    </div>`).join('');
}
render();
