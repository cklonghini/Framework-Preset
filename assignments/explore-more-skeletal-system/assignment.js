/*
  Explore - More About the Skeletal System (Anatomy & Physiology A)
  Everything a student sees is written in this file. The shared engine in /engine builds the page,
  progress bars, PDF printout, Listen buttons, and captions from it.
  Main video: Bozeman Science (Mr. Andersen), "The Skeletal System". Captions come from the teacher's transcript
  (source/andersen-transcript.txt, not saved to GitHub).
  Second video: Flocabulary, "Skeletal System". It has captions built into the picture, and the teacher chose not to
  add a caption file, so no question depends on what it says.
  Reading for Part 6: Let's Talk Science, "Spaceflight and Bone Loss" (source/, and linked online).
  Text rules: *text* is shown in italics (use it for scientific names). Reading boxes (read) and tables use HTML.
*/
window.ASSIGNMENT = {
  title: 'Explore - More About the Skeletal System',
  course: 'Anatomy & Physiology A',
  storageKey: 'explore-more-skeletal-system-v1',
  short: 'skeletal-system',                         // short link: SITE/skeletal-system

  /* supported version (?support=eagle): the goal box at the top */
  essential: {
    question: 'What does the skeletal system do for the body, and how do we keep our bones healthy?',
    goals: [
      'Put the levels of organization in order, from cells to organ systems.',
      'Name the five functions of the skeletal system and give an example of each.',
      'Tell how bones, muscles, tendons, ligaments, and joints work together to move the body.',
      'Explain why astronauts lose bone in space and how exercise helps bones stay strong.'
    ]
  },

  icon: '<svg viewBox="0 0 64 72" aria-hidden="true" focusable="false">'
    + '<path d="M18 14 a7 7 0 1 0 -6 11 l29 29 a7 7 0 1 0 11 6 a7 7 0 1 0 -6 -11 l-29 -29 a7 7 0 1 0 -11 -6 Z" transform="translate(2 2)" fill="var(--ligand)" stroke="var(--primary-ink)" stroke-width="3" stroke-linejoin="round"/></svg>',

  video: {
    title: 'The Skeletal System',
    src: 'media/skeletal-system-video.mp4',
    seconds: 479
  },

  /* short clips, one or two per part. from/to are the times in the full video (they are shown to students). */
  clips: {
    flocabulary: { support: false, src: 'media/clip-flocabulary.mp4', from: 0, to: 203.9, seconds: 204,
                   title: 'Skeletal System (Flocabulary)', of: 'Skeletal System (Flocabulary)', whole: true },
    types:       { src: 'media/clip-types.mp4', from: 0.0, to: 48.0, seconds: 48, title: 'Exoskeletons and endoskeletons' },
    bone:        { src: 'media/clip-bone.mp4', from: 48.0, to: 120.0, seconds: 72, title: 'Bone is alive: compact bone, spongy bone, and marrow' },
    support:     { src: 'media/clip-support.mp4', from: 115.0, to: 178.0, seconds: 63, title: 'The five functions, support, and the axial and appendicular skeleton' },
    muscles:     { src: 'media/clip-muscles.mp4', from: 178.0, to: 212.0, seconds: 34, title: 'Muscles, tendons, and ligaments' },
    joints:      { src: 'media/clip-joints.mp4', from: 212.0, to: 340.0, seconds: 128, title: 'The five types of joints' },
    storage:     { src: 'media/clip-storage.mp4', from: 335.0, to: 413.0, seconds: 78, title: 'Storage and blood' },
    homeostasis: { src: 'media/clip-homeostasis.mp4', from: 407.0, to: 478.0, seconds: 71, title: 'Homeostasis: controlling blood calcium' }
  },

  parts: [
    /* ---------------------------------------------------------------- Part 1 */
    {
      title: 'From cells to the skeletal system',
      intro: 'Start with a song! The Flocabulary video is a quick, catchy review of the skeletal system. Then read about how the body is organized, from tiny cells all the way up to whole organ systems.',
      clips: ['flocabulary'],
      read: '<p><b>Read:</b> Your body is built in levels. Each level is made of the level before it.</p>'
        + '<ol><li><b>Cells</b> are the simplest level of organization. They are the smallest living units of the body. Bone cells are called <b>osteocytes</b>.</li>'
        + '<li><b>Tissues</b> are groups of similar cells that work together for a common function. Bone tissue is one example.</li>'
        + '<li><b>Organs</b> are made of different tissues working together. Each bone is an organ. It has bone tissue, blood vessels, and marrow.</li>'
        + '<li><b>Organ systems</b> are the most complex level of organization. They are groups of organs that work together. The <b>skeletal system</b> is an organ system made of bones, cartilage, tendons, and ligaments.</li></ol>'
        + '<p>All the organ systems together make up the whole <b>organism</b>: you!</p>'
        + '<p>A baby is born with about 270 bones. As a child grows, some of these bones fuse (join) together. An adult skeleton has <b>206 bones</b>.</p>',
      questions: [
        {
          type: 'multi',
          text: 'Which of these are levels of organization in the human body? Choose every one that fits.',
          easy: 'Which of these are levels of organization (how the body is built) in the human body? Pick every one that is right.',
          options: ['Cells', 'Tissues', 'Organs', 'Organ systems'],
          answers: ['Cells', 'Tissues', 'Organs', 'Organ systems'],
          tip: 'Every choice you made is right, but there are more. Reread the numbered list in the reading.',
          explain: 'Cells, tissues, organs, and organ systems are all levels of organization. Each level is built from the one before it.'
        },
        {
          type: 'choice',
          text: 'The simplest level of organization of the human body is _____.',
          options: ['Cells', 'Tissues', 'Organs', 'Organ systems'], answer: 0,
          tip: 'Look for the smallest living unit. Which level is at the top of the numbered list?',
          explain: 'Cells are the simplest level. They are the smallest living units of the body.'
        },
        {
          type: 'choice',
          text: 'The most complex level of organization of the human body is _____.',
          options: ['Cells', 'Tissues', 'Organs', 'Organ systems'], answer: 3,
          tip: 'Look for the level made of groups of organs. Which level is at the bottom of the numbered list?',
          explain: 'Organ systems are the most complex level. They are groups of organs that work together, like the skeletal system.'
        },
        {
          type: 'choice',
          text: '_____ are similar cells that work together for a common function.',
          options: ['Tissues', 'Organs', 'Organ systems', 'Cells'], answer: 0,
          tip: 'This level is one step up from cells. Reread item 2 in the reading.',
          explain: 'Tissues are groups of similar cells that work together for a common function. Bone tissue is one example.'
        },
        {
          type: 'choice',
          text: 'True or false: There are 150 bones in the adult skeletal system.',
          options: ['True', 'False'], answer: 1,
          tip: 'Check the last paragraph of the reading. How many bones does an adult skeleton have?',
          explain: 'False. An adult skeleton has 206 bones. A baby has about 270, and some of them fuse together as the child grows.'
        }
      ]
    },

    /* ---------------------------------------------------------------- Part 2 */
    {
      title: 'Two kinds of skeletons, and bone is alive',
      clips: ['types', 'bone'],
      read: '<p><b>Read:</b> There are two different types of skeleton.</p>'
        + '<ul><li>An <b>exoskeleton</b> is a skeleton on the outside of the body, like the one beetles and other insects have. As an animal with an exoskeleton grows, it quickly outgrows its skeleton, so it has to <b>molt</b> (shed its skeleton and grow a new one).</li>'
        + '<li>An <b>endoskeleton</b> is a skeleton on the inside of the body, like ours. An endoskeleton can support greater weight. That is why animals with endoskeletons can get very big, and why we will never have insects the size of an elephant.</li></ul>'
        + '<p>An endoskeleton is built of <b>bone</b>. Many people picture a bone as a dried-out piece of wood, but nothing could be farther from the truth. Bone is living material. It is filled with <b>capillaries</b> (tiny blood vessels) that feed the bone with nutrients and exchange nutrients with the blood.</p>'
        + '<p>A bone has layers:</p>'
        + '<ul><li><b>Compact bone</b> is the hard layer around the outside.</li>'
        + '<li><b>Spongy bone</b> is the next layer in. It is full of small spaces.</li>'
        + '<li><b>Marrow</b> is in the very inside. <b>Red marrow</b> mostly has the building blocks of blood. <b>Yellow marrow</b> has way more fat, storing fatty acids for a time when the body needs them.</li></ul>',
      questions: [
        {
          type: 'choice',
          text: 'True or false: All animals have skeletons on the inside of their bodies.',
          options: ['True', 'False'], answer: 1,
          tip: 'Watch the first clip. The video shows a group of animals that rule the world. Where is their skeleton?',
          explain: 'False. Insects such as beetles have an exoskeleton, a skeleton on the outside. Animals like us have an endoskeleton on the inside.'
        },
        {
          type: 'selects',
          text: 'Exoskeleton or endoskeleton? Match each description.',
          easy: 'Read each sentence. Is it about an exoskeleton (outside skeleton) or an endoskeleton (inside skeleton)? Pick one for each.',
          options: ['Endoskeleton', 'Exoskeleton'],
          items: [
            { label: 'A skeleton on the outside of the body', answer: 'Exoskeleton', hint: 'The prefix “exo-” is also in the word “exit.”' },
            { label: 'The kind of skeleton humans have', answer: 'Endoskeleton', hint: 'The video says, “That’s like us.” Where is our skeleton?' },
            { label: 'The kind of skeleton beetles have', answer: 'Exoskeleton', hint: 'Look at the beetles in the first clip. Where is their hard covering?' },
            { label: 'Can support greater weight, so animals can get very big', easy: 'Can hold up more weight, so animals can grow very big', answer: 'Endoskeleton', hint: 'Think about why there are no insects the size of an elephant.' },
            { label: 'The animal must molt as it grows', answer: 'Exoskeleton', hint: 'Which kind of skeleton does an animal quickly outgrow?' }
          ]
        },
        {
          type: 'selects',
          text: 'Match each part of a bone to its description.',
          easy: 'Read each sentence about the inside of a bone. Pick the part of the bone it describes.',
          options: ['Compact bone', 'Red marrow', 'Spongy bone', 'Yellow marrow'],
          items: [
            { label: 'The hard layer around the outside of the bone', answer: 'Compact bone', hint: 'The video starts at the outside of the femur and moves in. What is the first layer?' },
            { label: 'The layer just inside the hard outer layer', answer: 'Spongy bone', hint: 'Its name sounds like something with lots of little holes.' },
            { label: 'Mostly has the building blocks of blood', answer: 'Red marrow', hint: 'The video says this marrow gets its name from its color. What color is blood?' },
            { label: 'Stores fat (fatty acids) for when the body needs it', easy: 'Stores fat for when the body needs it', answer: 'Yellow marrow', hint: 'There are two kinds of marrow. Which one is not about blood?' }
          ]
        },
        {
          support: false,
          type: 'choice',
          text: 'The video says a bone is NOT like a dried-out piece of wood. Why not?',
          easy: 'The video says a bone is NOT like a dry piece of wood. Why not?',
          options: ['Bone is living material, filled with capillaries that exchange nutrients with the blood', 'Bone is soft all the way through', 'Bone is made only of fat', 'Bone has no cells in it'],
          answer: 0,
          tip: 'Listen right after the video compares bone to wood. What does it say bone is filled with?',
          explain: 'Bone is alive. It is filled with capillaries, and it exchanges nutrients with the blood.'
        }
      ]
    },

    /* ---------------------------------------------------------------- Part 3 */
    {
      title: 'Support, protection, and the shapes of bones',
      clips: ['support'],
      read: '<p><b>Read:</b> The skeletal system has <b>five functions</b>: support, movement, storage, blood, and homeostasis. This part is about the first one.</p>'
        + '<p><b>Support:</b> Your skeleton holds you up. You couldn’t stand upright without your endoskeleton. It also offers <b>protection</b> for vital organs. The skull protects the brain, and the ribcage protects the organs in the thoracic cavity (the chest).</p>'
        + '<p>The skeleton is broken down into two parts:</p>'
        + '<ul><li>The <b>axial skeleton</b> is made up of the skull, the vertebral column (the backbone), and the ribs. It protects the central nervous system and a lot of organs.</li>'
        + '<li>The <b>appendicular skeleton</b> is made up of the bones in the appendages (arms and legs) and the bones that support them, like the hips and the shoulder blades. Its function is locomotion (moving from place to place).</li></ul>'
        + '<p>Bones can also be sorted by their <b>shape</b>:</p>'
        + '<ul><li><b>Long bones</b> are longer than they are wide, like the femur (thigh bone) and the bones of the arms. Long bones provide strength and structure to a person’s skeleton.</li>'
        + '<li><b>Short bones</b> are about as wide as they are long, like the bones of the wrist, the ankle, and the knee.</li>'
        + '<li><b>Flat bones</b> are thin and flat, like the ribs, the skull, and the shoulder blades. They protect the organs underneath them.</li>'
        + '<li><b>Irregular bones</b> have shapes that don’t fit the other groups, like the vertebrae in your backbone.</li></ul>',
      questions: [
        {
          type: 'choice',
          text: 'True or false: The only functions of the skeletal system are movement and support.',
          options: ['True', 'False'], answer: 1,
          tip: 'Listen near the start of the clip. How many functions does the video list?',
          explain: 'False. The skeletal system has five functions: support, movement, storage, blood, and homeostasis.'
        },
        {
          type: 'mnemonic',
          text: 'Make your own memory trick for the five functions of the skeletal system. Write a sentence where each word starts with the same letter as the function, in order: Support, Movement, Storage, Blood, Homeostasis.',
          easy: 'Make a memory trick for the five jobs of the skeleton. Write one word in each box. Each word must start with the same letter as the job: Support, Movement, Storage, Blood, Homeostasis.',
          words: ['Support', 'Movement', 'Storage', 'Blood', 'Homeostasis']
        },
        {
          type: 'selects',
          text: 'Axial skeleton or appendicular skeleton? Sort each bone.',
          easy: 'Is each bone part of the axial skeleton (the center of the body) or the appendicular skeleton (the arms, legs, and the bones that hold them on)? Pick one for each.',
          options: ['Appendicular skeleton', 'Axial skeleton'],
          items: [
            { label: 'Skull', answer: 'Axial skeleton', hint: 'Does this bone protect the brain in the center of the body, or help you walk?' },
            { label: 'Vertebral column (backbone)', answer: 'Axial skeleton', hint: 'The video names three parts of the skeleton that protect the central nervous system.' },
            { label: 'Ribs', answer: 'Axial skeleton', hint: 'These bones protect organs in the chest. Which part of the skeleton protects organs?' },
            { label: 'Hip', answer: 'Appendicular skeleton', hint: 'The video points to the joints. Is the hip out past them, holding the legs on?' },
            { label: 'Shoulder blade', answer: 'Appendicular skeleton', hint: 'This bone supports the arm. Which part of the skeleton includes the bones that support the appendages?' },
            { label: 'Arm and leg bones', answer: 'Appendicular skeleton', hint: 'Arms and legs are appendages.' }
          ]
        },
        {
          type: 'choice',
          text: 'The _____ skeleton consists of the bones in the appendages and the bones that support them.',
          easy: 'The _____ skeleton is made of the bones in the arms and legs, and the bones that hold them on.',
          options: ['Axial', 'Appendicular'], answer: 1,
          tip: 'Look for the word that sounds like “appendage.”',
          explain: 'The appendicular skeleton is the arms, the legs, and the bones that support them, like the hips and shoulder blades. Its function is locomotion.'
        },
        {
          type: 'selects',
          text: 'Complete each sentence about the shapes of bones.',
          easy: 'Bones come in different shapes. Pick the shape that finishes each sentence.',
          options: ['Flat bones', 'Irregular bones', 'Long bones', 'Short bones'],
          items: [
            { label: '_____ provide strength and structure to a person’s skeleton.', answer: 'Long bones', hint: 'Think of the femur in the video. What shape is it?' },
            { label: 'A knee bone is an example of _____.', answer: 'Short bones', hint: 'Find the knee in the list of shapes in the reading.' },
            { label: 'A person’s rib bone is an example of _____.', answer: 'Flat bones', hint: 'Ribs are thin and protect organs in the chest. Which shape is that?' },
            { label: 'The vertebrae in the backbone are examples of _____.', answer: 'Irregular bones', hint: 'Which shape is for bones that don’t fit the other groups?' }
          ]
        }
      ]
    },

    /* ---------------------------------------------------------------- Part 4 */
    {
      title: 'Movement: muscles, tendons, ligaments, and joints',
      clips: ['muscles', 'joints'],
      read: '<p><b>Read:</b> The second function of the skeletal system is <b>movement</b>. Bones allow us to move, but they can’t move without <b>skeletal muscles</b>.</p>'
        + '<ul><li>A <b>tendon</b> attaches muscle to bone.</li>'
        + '<li>A <b>ligament</b> attaches bone to bone.</li></ul>'
        + '<p>Bone is static (it doesn’t bend), so you need a <b>joint</b> between bones to get movement. There are five general types of joints. Each gives a different kind of movement.</p>'
        + '<ol><li><b>Ball and socket:</b> a ball fitting inside a socket. It gives a huge amount of maneuverability (moving in many directions). Examples: the <b>hip</b> and the <b>shoulder</b>. With so much movement, a lot can go wrong, which is why hip replacement is very common.</li>'
        + '<li><b>Condyloid:</b> an oval piece that sits on a curved base. Example: the <b>wrist</b>. It can bend back and forth (flexion and extension) and side to side (adduct and abduct), but it doesn’t move as much as a ball and socket joint.</li>'
        + '<li><b>Saddle:</b> one bone sitting on another, like a rider on a saddle. Example: the <b>thumb</b>. It gives us an <b>opposable thumb</b>, which means you can touch all of your other fingers with your thumb. That is not super common in the animal world.</li>'
        + '<li><b>Hinge:</b> like a door hinge, it moves in only one direction. Example: the <b>fingers</b> (phalanges).</li>'
        + '<li><b>Pivot:</b> one bone turns around a center point. Example: the <b>elbow</b>, where the humerus meets the radius and ulna, so you can turn your forearm.</li></ol>',
      questions: [
        {
          type: 'selects',
          text: 'Tendon or ligament? Complete each sentence.',
          easy: 'Pick tendon or ligament to finish each sentence.',
          options: ['Ligament', 'Tendon'],
          items: [
            { label: 'A _____ attaches muscle to bone.', answer: 'Tendon', hint: 'Listen in the first clip for what attaches a muscle to the bone.' },
            { label: 'A _____ attaches bone to bone.', answer: 'Ligament', hint: 'The video says bone can “also be attached to bone” using this.' }
          ]
        },
        {
          type: 'selects',
          text: 'Match each body part to its type of joint.',
          easy: 'Look at each body part. Pick the type of joint it has.',
          options: ['Ball and socket', 'Condyloid', 'Hinge', 'Pivot', 'Saddle'],
          items: [
            { label: 'Hip', answer: 'Ball and socket', hint: 'The video gives two examples of the joint with the most maneuverability. This is one of them.' },
            { label: 'Shoulder', answer: 'Ball and socket', hint: 'The video says there is a huge amount of maneuverability in this joint.' },
            { label: 'Wrist', answer: 'Condyloid', hint: 'This joint bends back and forth and side to side, but not all the way around.' },
            { label: 'Thumb', answer: 'Saddle', hint: 'This joint gives us an opposable thumb. Picture a rider sitting on a horse.' },
            { label: 'Fingers (phalanges)', answer: 'Hinge', hint: 'Bend your finger. Does it move like a door?' },
            { label: 'Elbow, where the humerus meets the radius and ulna', easy: 'Elbow (where the upper arm meets the forearm), when you turn your forearm', answer: 'Pivot', hint: 'The video turns its arm around a center point.' }
          ]
        },
        {
          support: false,
          type: 'choice',
          text: 'Why does the video say hip replacement is very common?',
          easy: 'The video says many people get a new hip (hip replacement). Why?',
          options: ['A ball and socket joint moves a lot, so many ligaments hold it in place and a lot can go wrong', 'The hip is a hinge joint that moves in only one direction', 'The hip has no ligaments holding it in place', 'Hip bones are made of yellow marrow'],
          answer: 0,
          tip: 'Listen to what the video says is bad about having so much maneuverability.',
          explain: 'A ball and socket joint gives a lot of movement, but it needs many ligaments to hold it in place, so a lot can go wrong.'
        },
        {
          support: false,
          type: 'choice',
          text: 'What does it mean to have an opposable thumb?',
          options: ['You can touch all of your other fingers with your thumb', 'Your thumb can only bend in one direction', 'Your thumb has no joint', 'Your thumb is attached to your wrist by a tendon'],
          answer: 0,
          tip: 'Listen to the saddle joint section. The video explains what “opposable” basically means.',
          explain: 'An opposable thumb can touch all of your other fingers. You can thank your saddle joint for that.'
        }
      ]
    },

    /* ---------------------------------------------------------------- Part 5 */
    {
      title: 'Storage, blood, and homeostasis',
      clips: ['storage', 'homeostasis'],
      read: '<p><b>Read:</b> Bone is a living organ, so it does more than hold you up.</p>'
        + '<p><b>Storage:</b> <b>Haversian canals</b> run through the middle of bone and let blood flow through it. <b>Osteocytes</b> are bone cells that look almost like stars. They lay down new bone. Bone is made of chemicals, mostly <b>calcium</b> and <b>phosphorus</b>. Bone stores these, along with fat. Because bone is connected right to the circulatory system, the body can grab calcium, phosphorus, or fat from the bone when it needs them.</p>'
        + '<p><b>Blood:</b> The marrow has <b>multipotent stem cells</b>. These cells can become many other kinds of cells: <b>erythrocytes</b> (red blood cells), and also <b>macrophages</b> and <b>lymphocytes</b> (kinds of white blood cells).</p>'
        + '<p><b>Homeostasis</b> means keeping a stable internal environment. Bones help by controlling the amount of calcium in the blood:</p>'
        + '<ul><li>If blood calcium goes <b>too high</b>, the <b>thyroid gland</b> secretes <b>calcitonin</b>. The bone takes in calcium, the kidneys get rid of calcium, and the blood calcium level drops.</li>'
        + '<li>If blood calcium goes <b>too low</b>, the <b>parathyroid gland</b> secretes <b>parathyroid hormone</b>. The bone releases calcium into the blood, the kidneys hold onto calcium, and the intestines take in more.</li></ul>'
        + '<p><b>All five functions together:</b> the skeleton <b>supports</b> and protects the body, works with muscles for <b>movement</b>, provides <b>storage</b> for calcium, phosphorus, and fat, makes <b>blood</b> cells in the marrow, and keeps <b>homeostasis</b> by controlling blood calcium.</p>',
      questions: [
        {
          type: 'selects',
          text: 'Match each word to its description.',
          easy: 'Read each sentence about the inside of bone. Pick the word that matches it.',
          options: ['Calcium and phosphorus', 'Haversian canals', 'Multipotent stem cells', 'Osteocytes'],
          items: [
            { label: 'Run through the middle of bone and let blood flow through it', answer: 'Haversian canals', hint: 'The video says these “go through the middle.”' },
            { label: 'Star-shaped bone cells that lay down new bone', answer: 'Osteocytes', hint: '“Osteo” means bone, and “cyte” means cell.' },
            { label: 'The main chemicals that bone stores', answer: 'Calcium and phosphorus', hint: 'Listen for what bone is “made up of.”' },
            { label: 'Cells in the marrow that can become many other kinds of cells', easy: 'Cells in the marrow that can turn into many other kinds of cells', answer: 'Multipotent stem cells', hint: 'Listen in the blood section. The video corrects itself on the name of these cells.' }
          ]
        },
        {
          support: false,
          type: 'multi',
          text: 'The video says stem cells in the marrow can become which cells? Choose every one that fits.',
          easy: 'The video says stem cells in the marrow can turn into some kinds of cells. Which ones? Pick every one that is right.',
          options: ['Erythrocytes (red blood cells)', 'Macrophages', 'Lymphocytes', 'Osteoclasts', 'Neurons (nerve cells)'],
          answers: ['Erythrocytes (red blood cells)', 'Macrophages', 'Lymphocytes'],
          rules: [{ any: ['Osteoclasts', 'Neurons (nerve cells)'], tip: 'Check each choice against the Blood paragraph in the reading. Did the video name it?' }],
          tip: 'Every choice you made is right, but there are more. The video names three kinds of cells.',
          explain: 'The stem cells in the marrow can become erythrocytes (red blood cells), macrophages, and lymphocytes.'
        },
        {
          type: 'order',
          text: 'Put the steps in order. What happens when blood calcium goes too high?',
          easy: 'Put the steps in order. What happens when there is too much calcium in the blood?',
          items: ['The blood calcium level goes too high.', 'The thyroid gland secretes calcitonin.', 'The bone takes in calcium from the blood.', 'The blood calcium level drops back down.'],
          tip: 'Rewatch the second clip. Which gland reacts first, and what does the bone do?',
          explain: 'High blood calcium makes the thyroid gland secrete calcitonin. The bone takes in calcium, so the blood calcium level drops.'
        },
        {
          type: 'selects',
          text: 'Calcitonin or parathyroid hormone? Match each description.',
          easy: 'Read each sentence. Is it about calcitonin or parathyroid hormone? Pick one for each.',
          options: ['Calcitonin', 'Parathyroid hormone'],
          items: [
            { label: 'Secreted by the thyroid gland', answer: 'Calcitonin', hint: 'One hormone’s name includes the gland it comes from. This is the other one.' },
            { label: 'Secreted when blood calcium goes too low', answer: 'Parathyroid hormone', hint: 'Which hormone makes the bone release its stored calcium?' },
            { label: 'Makes the bone take in calcium', answer: 'Calcitonin', hint: 'This hormone lowers the blood calcium level.' },
            { label: 'Makes the bone release calcium into the blood', answer: 'Parathyroid hormone', hint: 'This hormone raises the blood calcium level.' }
          ]
        },
        {
          type: 'choice',
          text: 'True or false: Bones are connected directly to the circulatory system.',
          options: ['True', 'False'], answer: 0,
          tip: 'Listen to the very end of the video. What does it say is nice about bones?',
          explain: 'True. Bones are alive and connected right to the circulatory system, so the body can get what it needs from them really quickly.'
        },
        {
          type: 'highlight',
          cer: true,              // claim (blue), evidence (yellow), expand (green)
          from: 'the video',
          text: 'In a paragraph, explain the five functions of the skeletal system and argue why it is important to keep the skeletal system functioning optimally (working its best). (5 to 8 sentences)',
          easy: 'Write a paragraph. Explain the five jobs of the skeletal system. Then tell why it is important to keep your skeleton working its best. (5 to 8 sentences)',
          starters: ['It is important to keep the skeletal system working its best because …', 'The first function is support, which means …', 'According to the video, bones help with movement by …', 'Bones also store …', 'The video explains that bones help keep homeostasis by …'],
          min: 300,
          ideas: [
            { done: 'You explained support and protection.', q: 'Did you explain the support function?', tip: 'Think about what holds you upright and what keeps your brain safe.', re: /upright|\bstand|hold(s|ing)? (us|you|me|the body|our body|it) up|\bprotect|skull|rib ?cage|\bribs\b|\bbrain\b|vital organs/ },
            { done: 'You explained movement.', q: 'Did you explain how the skeleton helps with movement?', tip: 'Bones can’t move on their own. What else is needed, and what goes between bones?', re: /locomotion|\bjoints?\b|tendons?|muscles?|ligaments?|\bwalk|\brun\b|\brunning/ },
            { done: 'You explained storage.', q: 'Did you explain what bones store?', tip: 'Name a chemical or nutrient the body can grab from bone when it needs it.', re: /calcium|phosph|fatty acids|\bfats?\b|minerals?/ },
            { done: 'You explained the blood function.', q: 'Did you explain how bones help with blood?', tip: 'What does the marrow make?', re: /marrow|blood cells?|stem cells?|erythrocyte|red blood|lymphocyte|macrophage/ },
            { done: 'You explained homeostasis.', q: 'Did you explain homeostasis?', tip: 'How do bones help keep the amount of calcium in the blood stable?', re: /stable|balance|calcitonin|thyroid|blood calcium|calcium (level|in the blood)|internal environment/ },
            { done: 'You wrote at least 2 sentences.', q: 'Did you write at least 2 sentences?', tip: 'Give each function its own sentence.', sentences: 2 }
          ]
        }
      ]
    },

    /* ---------------------------------------------------------------- Part 6 */
    {
      title: 'Bones in space',
      intro: 'Bones are alive, and they change depending on how you use them. Read about what happens to astronauts’ bones in space, and what that means for your bones here on Earth.',
      readLabel: 'Read about spaceflight and bone loss',
      read: '<p><b>Read:</b> This reading comes from the article <a href="https://letstalkscience.ca/educational-resources/stem-in-context/spaceflight-and-bone-loss" target="_blank" rel="noopener noreferrer">“Spaceflight and Bone Loss” by Let’s Talk Science</a> (it opens in a new tab). You can read the whole article there, then come back to this tab. Everything you need for the questions is below.</p>'
        + '<p><b>Why space is hard on bones:</b> On Earth, gravity is always pulling you toward the center of the planet. In space, astronauts experience <b>weightlessness</b>, also called <b>microgravity</b>. This is what causes bone loss.</p>'
        + '<p><b>What bones are made of:</b> Bone is a type of dense connective tissue, like ligaments and tendons. Bone cells are surrounded by collagen (a protein) and minerals like calcium and phosphate. Together these make the <b>bone matrix</b>, which gives bone its strength.</p>'
        + '<p><b>Remodeling:</b> Your bone tissue is always breaking down and being rebuilt. This is called <b>remodeling</b>. Three kinds of bone cells do this work:</p>'
        + '<ul><li><b>Osteoblasts</b> build bone. They lay down collagen, then minerals. Calcium is taken in from the blood.</li>'
        + '<li><b>Osteoclasts</b> break bone down. They dissolve the minerals, and calcium is released back into the body.</li>'
        + '<li><b>Osteocytes</b> are mature bone cells trapped inside the bone. They signal to the osteoblasts and help find cracks in the bone.</li></ul>'
        + '<p>Osteoblasts and osteoclasts must stay in balance for bones to stay healthy.</p>'
        + '<p><b>What happens in space:</b> In microgravity, bones don’t have to support the body against gravity. Astronauts get <b>spaceflight osteopenia</b> and lose, on average, <b>1 to 2 percent of their bone mass every month</b>, mostly in the legs, hips, and spine. Back on Earth, it can take <b>three or four years</b> for those bones to recover. Thinning bones also raise the calcium level in the blood, which increases the risk of kidney stones.</p>'
        + '<p><b>How astronauts fight bone loss:</b> Exercise keeps both bones and muscles strong. Astronauts must <b>exercise at least 2 hours every day</b>. They even strap themselves to treadmills so they can walk and run. A 2013 study found that taking <b>bisphosphonates</b> (a medicine already used for osteoporosis) along with exercise may help protect astronauts. In another study, mice that made extra of a bone-building protein called pleiotrophin lost only 3% of their spine volume, compared to 41.5% in untreated mice. NASA is also studying how <b>diet</b> and exercise help prevent bone loss.</p>'
        + '<p><b>Back on Earth:</b> The best way to build bone mass on Earth is with <b>load-bearing activities</b>, like walking, running, and playing basketball. If you don’t exercise, you lose bone density and strength. Weak bones can lead to <b>osteoporosis</b>, a disease that makes bones thin and easy to break, especially in older adults. Space research on bone loss might even help find a cure for osteoporosis.</p>',
      questions: [
        {
          type: 'choice',
          text: 'What causes astronauts to lose bone in space?',
          options: ['Microgravity (weightlessness), so their bones don’t have to support the body against gravity', 'Too much exercise on the space station', 'Too much calcium in their food', 'Extra gravity pulling on their bones'],
          answer: 0,
          tip: 'Reread the paragraph called “Why space is hard on bones.” What is different about gravity in space?',
          explain: 'In microgravity, bones don’t have to support the body against gravity, so they lose mass.'
        },
        {
          type: 'selects',
          text: 'Match each bone cell to what it does.',
          easy: 'Read what each bone cell does. Pick its name.',
          options: ['Osteoblasts', 'Osteoclasts', 'Osteocytes'],
          items: [
            { label: 'Build bone by laying down collagen and minerals', answer: 'Osteoblasts', hint: 'Think “B” for build.' },
            { label: 'Break bone down and release calcium back into the body', answer: 'Osteoclasts', hint: 'Think “C” for cut down.' },
            { label: 'Mature bone cells trapped inside the bone that find cracks', easy: 'Grown-up bone cells stuck inside the bone that find cracks', answer: 'Osteocytes', hint: 'This is the same kind of bone cell you met in the video.' }
          ]
        },
        {
          support: false,
          type: 'choice',
          text: 'On average, how much bone mass do astronauts lose in space?',
          options: ['1 to 2 percent every month', '1 to 2 percent every year', '41.5 percent every day', 'None, if they eat enough'],
          answer: 0,
          tip: 'Reread the paragraph “What happens in space.” Look for a percent and how often it happens.',
          explain: 'Astronauts lose, on average, 1 to 2 percent of their bone mass every month, and it can take three or four years to recover.'
        },
        {
          type: 'choice',
          text: 'True or false: If you do not exercise, you will lose bone density and strength.',
          options: ['True', 'False'], answer: 0,
          tip: 'Reread the last paragraph, “Back on Earth.” What does it say about exercise?',
          explain: 'True. Exercise, especially load-bearing activity like walking and running, keeps bones strong. Without it, bones lose density and strength, the same way astronauts’ bones do in space.'
        },
        {
          support: false,
          type: 'multi',
          text: 'Which of these help astronauts fight bone loss, according to the reading? Choose every one that fits.',
          easy: 'Which of these help astronauts keep their bones strong? Pick every one that the reading names.',
          options: ['Exercising at least 2 hours a day', 'Running on a treadmill while strapped down', 'Taking bisphosphonates along with exercise', 'Sleeping more hours each night', 'Avoiding all calcium'],
          answers: ['Exercising at least 2 hours a day', 'Running on a treadmill while strapped down', 'Taking bisphosphonates along with exercise'],
          rules: [{ any: ['Sleeping more hours each night', 'Avoiding all calcium'], tip: 'Check each choice against the paragraph “How astronauts fight bone loss.” Is it there?' }],
          tip: 'Every choice you made is right, but there are more. Reread the paragraph “How astronauts fight bone loss.”',
          explain: 'Astronauts exercise at least 2 hours a day, strap themselves to treadmills, and may take bisphosphonates along with exercise.'
        },
        {
          type: 'highlight',
          examples: 'Examples: “According to the article,” “The reading says that,” “For example,” “One piece of evidence is,” or “This shows that.”',
          text: 'How does space travel affect bones? How do astronauts overcome the negative impact of space on their bones? Use evidence from the reading, along with transition words that point to your evidence. For example: “According to the article, …” or “For example, …” (4 to 6 sentences)',
          easy: 'How does going to space change bones? How do astronauts keep their bones strong in space? Use facts from the reading. Start your facts with words that point to them. For example: “According to the article, …” or “For example, …” (4 to 6 sentences)',
          starters: ['According to the article, in space astronauts experience …', 'This causes their bones to …', 'For example, astronauts’ bones …', 'To overcome this, astronauts …', 'This shows that …'],
          min: 200,
          ideas: [
            { done: 'You told what causes bone loss in space.', q: 'Did you say what causes bone loss in space?', tip: 'What is different about gravity in space?', re: /microgravity|weightless|no gravity|less gravity|without gravity|lack of gravity|zero gravity|low gravity|gravity/ },
            { done: 'You told what happens to the bones.', q: 'Did you say what happens to astronauts’ bones?', tip: 'Look for how much bone mass astronauts lose, and where.', re: /bone (loss|mass|density)|\blos(e|es|ing)\b|\blost\b|osteopenia|\bthin(ner|ning|s)?\b|\bweak|\d+ ?(%|percent)|break(s|ing)? down/ },
            { done: 'You told how astronauts fight bone loss.', q: 'Did you say how astronauts overcome bone loss?', tip: 'What do astronauts do for at least 2 hours a day? What medicine may help?', re: /exercis|treadmill|work ?out|bisphosphonate|medicine|drug|diet/ },
            { done: 'You wrote at least 2 sentences.', q: 'Did you write at least 2 sentences?', tip: 'Give the problem and the solution each their own sentence.', sentences: 2 },
            { done: 'You used transition words to point to your evidence.', q: 'Did you use transition words to point to your evidence?', tip: 'Introduce your evidence with words like “According to the article,” or “For example.”', writing: true, re: /for example|for instance|according to|this shows|that shows|which shows|shows that|evidence|in the (article|reading)|the (article|reading) (says|said|shows|explains|states|mentions)|because|such as|as an example|one example|proves?|this means|supports?/ },
            { done: 'You highlighted your transition words in yellow.', q: 'Did you highlight your transition words in yellow?', tip: 'Go back and select the transition words that point to your evidence, then press the yellow button.', highlight: true }
          ]
        },
        {
          type: 'written',
          text: 'How does this article connect to your life here on Earth? Think about what you do every day and what you could do to keep your bones strong. (3 to 5 sentences)',
          easy: 'How does this reading connect to your own life on Earth? Think about what you do each day. What could you do to keep your bones strong? (3 to 5 sentences)',
          starters: ['This article connects to my life because …', 'On Earth, I can build bone mass by …', 'If I stop moving around, my bones could …', 'Something I could do to keep my bones strong is …'],
          min: 150,
          ideas: [
            { done: 'You named a way to build strong bones on Earth.', q: 'Did you name a way to build bone mass on Earth?', tip: 'The reading names the best kind of activity for building bone mass on Earth.', re: /exercis|load.?bearing|walk|run|jog|basketball|sports?|soccer|volleyball|dance|lift|weights|hik|active|activity|calcium|vitamin d|milk|diet/ },
            { done: 'You told what happens to bones without exercise.', q: 'Did you say what happens to bones if a person isn’t active?', tip: 'What happens to astronauts’ bones when they don’t have to work against gravity? The same thing can happen on Earth.', re: /\blos(e|es|ing)\b|\blost\b|\bweak|\bthin(ner|ning|s)?\b|density|brittle|\bbreak|fractur|osteoporosis|osteopenia/ },
            { done: 'You connected the article to your own life.', q: 'Did you connect the article to your own life?', tip: 'Think about your own day. How much do you move? Does anyone in your family worry about their bones?', re: /\b(i|my|me|i’m|i'm|myself)\b[^.!?]*(exercis|walk|\brun|play|sport|active|\bsit|grandm|grandp|family|\beat|drink|milk|game|practice|gym)/ },
            { done: 'You wrote at least 2 sentences.', q: 'Did you write at least 2 sentences?', tip: 'Give each idea its own sentence.', sentences: 2 }
          ]
        }
      ]
    }
  ]
};
