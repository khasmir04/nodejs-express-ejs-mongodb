const articles = [
  {
    id: 1,
    title: "Create a project",
    order: 1,
    completed: true,
    author: "Diego Laura",
    imageSrc: "https://dummyimage.com/400x300/000/fff",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maxime animi sit, enim molestias veritatis excepturi ab aspernatur aliquam? Maxime tempora, qui distinctio eius saepe optio? Nulla reprehenderit perferendis exercitationem voluptas eveniet quas temporibus. Atque ex eveniet necessitatibus harum quos commodi, quaerat molestias voluptatibus hic sunt numquam similique eos minus eaque animi dolor possimus ipsam. Dicta culpa quis aspernatur quas ad doloremque quidem voluptatem quod. Officiis corporis asperiores expedita omnis, atque molestias? Rerum, quos dolore cupiditate provident culpa aut nisi ratione totam dignissimos beatae corporis doloribus. Dicta necessitatibus, tenetur, enim, eveniet quos facere modi expedita quia cum accusamus iste distinctio saepe dolores reprehenderit voluptate praesentium. Voluptates minus magnam officia iure corrupti iste rerum dicta cum dolorum molestias nam facilis accusantium, autem aperiam laborum recusandae, obcaecati nobis optio aut. Ut ipsum vitae natus voluptatum officiis sit inventore dicta architecto asperiores! Voluptatibus possimus accusantium nam quia quis quaerat a adipisci atque mollitia?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit velit labore, molestiae nisi hic inventore.",
  },
  {
    id: 2,
    title: "Take a cofféé",
    order: 2,
    completed: true,
    author: "Laong-Laan",
    imageSrc: "https://dummyimage.com/400x300/000/fff",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maxime animi sit, enim molestias veritatis excepturi ab aspernatur aliquam? Maxime tempora, qui distinctio eius saepe optio? Nulla reprehenderit perferendis exercitationem voluptas eveniet quas temporibus. Atque ex eveniet necessitatibus harum quos commodi, quaerat molestias voluptatibus hic sunt numquam similique eos minus eaque animi dolor possimus ipsam. Dicta culpa quis aspernatur quas ad doloremque quidem voluptatem quod. Officiis corporis asperiores expedita omnis, atque molestias? Rerum, quos dolore cupiditate provident culpa aut nisi ratione totam dignissimos beatae corporis doloribus. Dicta necessitatibus, tenetur, enim, eveniet quos facere modi expedita quia cum accusamus iste distinctio saepe dolores reprehenderit voluptate praesentium. Voluptates minus magnam officia iure corrupti iste rerum dicta cum dolorum molestias nam facilis accusantium, autem aperiam laborum recusandae, obcaecati nobis optio aut. Ut ipsum vitae natus voluptatum officiis sit inventore dicta architecto asperiores! Voluptatibus possimus accusantium nam quia quis quaerat a adipisci atque mollitia?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit velit labore, molestiae nisi hic inventore.",
  },
  {
    id: 3,
    title: "Write new article",
    order: 3,
    completed: true,
    author: "Agap-ito Bagumbayan",
    imageSrc: "https://dummyimage.com/400x300/000/fff",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maxime animi sit, enim molestias veritatis excepturi ab aspernatur aliquam? Maxime tempora, qui distinctio eius saepe optio? Nulla reprehenderit perferendis exercitationem voluptas eveniet quas temporibus. Atque ex eveniet necessitatibus harum quos commodi, quaerat molestias voluptatibus hic sunt numquam similique eos minus eaque animi dolor possimus ipsam. Dicta culpa quis aspernatur quas ad doloremque quidem voluptatem quod. Officiis corporis asperiores expedita omnis, atque molestias? Rerum, quos dolore cupiditate provident culpa aut nisi ratione totam dignissimos beatae corporis doloribus. Dicta necessitatibus, tenetur, enim, eveniet quos facere modi expedita quia cum accusamus iste distinctio saepe dolores reprehenderit voluptate praesentium. Voluptates minus magnam officia iure corrupti iste rerum dicta cum dolorum molestias nam facilis accusantium, autem aperiam laborum recusandae, obcaecati nobis optio aut. Ut ipsum vitae natus voluptatum officiis sit inventore dicta architecto asperiores! Voluptatibus possimus accusantium nam quia quis quaerat a adipisci atque mollitia?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit velit labore, molestiae nisi hic inventore.",
  },
  {
    id: 4,
    title: "Walk toward home",
    order: 4,
    completed: false,
    author: "Taga-Ilog",
    imageSrc: "https://dummyimage.com/400x300/000/fff",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maxime animi sit, enim molestias veritatis excepturi ab aspernatur aliquam? Maxime tempora, qui distinctio eius saepe optio? Nulla reprehenderit perferendis exercitationem voluptas eveniet quas temporibus. Atque ex eveniet necessitatibus harum quos commodi, quaerat molestias voluptatibus hic sunt numquam similique eos minus eaque animi dolor possimus ipsam. Dicta culpa quis aspernatur quas ad doloremque quidem voluptatem quod. Officiis corporis asperiores expedita omnis, atque molestias? Rerum, quos dolore cupiditate provident culpa aut nisi ratione totam dignissimos beatae corporis doloribus. Dicta necessitatibus, tenetur, enim, eveniet quos facere modi expedita quia cum accusamus iste distinctio saepe dolores reprehenderit voluptate praesentium. Voluptates minus magnam officia iure corrupti iste rerum dicta cum dolorum molestias nam facilis accusantium, autem aperiam laborum recusandae, obcaecati nobis optio aut. Ut ipsum vitae natus voluptatum officiis sit inventore dicta architecto asperiores! Voluptatibus possimus accusantium nam quia quis quaerat a adipisci atque mollitia?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit velit labore, molestiae nisi hic inventore.",
  },
  {
    id: 5,
    title: "Have some dinner",
    order: 5,
    completed: false,
    author: "Dimas-Ilaw",
    imageSrc: "https://dummyimage.com/400x300/000/fff",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maxime animi sit, enim molestias veritatis excepturi ab aspernatur aliquam? Maxime tempora, qui distinctio eius saepe optio? Nulla reprehenderit perferendis exercitationem voluptas eveniet quas temporibus. Atque ex eveniet necessitatibus harum quos commodi, quaerat molestias voluptatibus hic sunt numquam similique eos minus eaque animi dolor possimus ipsam. Dicta culpa quis aspernatur quas ad doloremque quidem voluptatem quod. Officiis corporis asperiores expedita omnis, atque molestias? Rerum, quos dolore cupiditate provident culpa aut nisi ratione totam dignissimos beatae corporis doloribus. Dicta necessitatibus, tenetur, enim, eveniet quos facere modi expedita quia cum accusamus iste distinctio saepe dolores reprehenderit voluptate praesentium. Voluptates minus magnam officia iure corrupti iste rerum dicta cum dolorum molestias nam facilis accusantium, autem aperiam laborum recusandae, obcaecati nobis optio aut. Ut ipsum vitae natus voluptatum officiis sit inventore dicta architecto asperiores! Voluptatibus possimus accusantium nam quia quis quaerat a adipisci atque mollitia?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit velit labore, molestiae nisi hic inventore.",
  },
  {
    id: 6,
    title: "Article Title",
    order: 6,
    completed: false,
    author: "Dimas-Ilaw",
    imageSrc: "https://dummyimage.com/400x300/000/fff",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maxime animi sit, enim molestias veritatis excepturi ab aspernatur aliquam? Maxime tempora, qui distinctio eius saepe optio? Nulla reprehenderit perferendis exercitationem voluptas eveniet quas temporibus. Atque ex eveniet necessitatibus harum quos commodi, quaerat molestias voluptatibus hic sunt numquam similique eos minus eaque animi dolor possimus ipsam. Dicta culpa quis aspernatur quas ad doloremque quidem voluptatem quod. Officiis corporis asperiores expedita omnis, atque molestias? Rerum, quos dolore cupiditate provident culpa aut nisi ratione totam dignissimos beatae corporis doloribus. Dicta necessitatibus, tenetur, enim, eveniet quos facere modi expedita quia cum accusamus iste distinctio saepe dolores reprehenderit voluptate praesentium. Voluptates minus magnam officia iure corrupti iste rerum dicta cum dolorum molestias nam facilis accusantium, autem aperiam laborum recusandae, obcaecati nobis optio aut. Ut ipsum vitae natus voluptatum officiis sit inventore dicta architecto asperiores! Voluptatibus possimus accusantium nam quia quis quaerat a adipisci atque mollitia?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit velit labore, molestiae nisi hic inventore.",
  },
  {
    id: 7,
    title: "Article Title",
    order: 7,
    completed: true,
    author: "Dimas-Ilaw",
    imageSrc: "https://dummyimage.com/400x300/000/fff",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maxime animi sit, enim molestias veritatis excepturi ab aspernatur aliquam? Maxime tempora, qui distinctio eius saepe optio? Nulla reprehenderit perferendis exercitationem voluptas eveniet quas temporibus. Atque ex eveniet necessitatibus harum quos commodi, quaerat molestias voluptatibus hic sunt numquam similique eos minus eaque animi dolor possimus ipsam. Dicta culpa quis aspernatur quas ad doloremque quidem voluptatem quod. Officiis corporis asperiores expedita omnis, atque molestias? Rerum, quos dolore cupiditate provident culpa aut nisi ratione totam dignissimos beatae corporis doloribus. Dicta necessitatibus, tenetur, enim, eveniet quos facere modi expedita quia cum accusamus iste distinctio saepe dolores reprehenderit voluptate praesentium. Voluptates minus magnam officia iure corrupti iste rerum dicta cum dolorum molestias nam facilis accusantium, autem aperiam laborum recusandae, obcaecati nobis optio aut. Ut ipsum vitae natus voluptatum officiis sit inventore dicta architecto asperiores! Voluptatibus possimus accusantium nam quia quis quaerat a adipisci atque mollitia?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit velit labore, molestiae nisi hic inventore.",
  },
  {
    id: 8,
    title: "Article Title",
    order: 8,
    completed: false,
    author: "Dimas-Ilaw",
    imageSrc: "https://dummyimage.com/400x300/000/fff",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maxime animi sit, enim molestias veritatis excepturi ab aspernatur aliquam? Maxime tempora, qui distinctio eius saepe optio? Nulla reprehenderit perferendis exercitationem voluptas eveniet quas temporibus. Atque ex eveniet necessitatibus harum quos commodi, quaerat molestias voluptatibus hic sunt numquam similique eos minus eaque animi dolor possimus ipsam. Dicta culpa quis aspernatur quas ad doloremque quidem voluptatem quod. Officiis corporis asperiores expedita omnis, atque molestias? Rerum, quos dolore cupiditate provident culpa aut nisi ratione totam dignissimos beatae corporis doloribus. Dicta necessitatibus, tenetur, enim, eveniet quos facere modi expedita quia cum accusamus iste distinctio saepe dolores reprehenderit voluptate praesentium. Voluptates minus magnam officia iure corrupti iste rerum dicta cum dolorum molestias nam facilis accusantium, autem aperiam laborum recusandae, obcaecati nobis optio aut. Ut ipsum vitae natus voluptatum officiis sit inventore dicta architecto asperiores! Voluptatibus possimus accusantium nam quia quis quaerat a adipisci atque mollitia?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit velit labore, molestiae nisi hic inventore.",
  },
  {
    id: 9,
    title: "Article Title",
    order: 9,
    completed: true,
    author: "Dimas-Ilaw",
    imageSrc: "https://dummyimage.com/400x300/000/fff",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maxime animi sit, enim molestias veritatis excepturi ab aspernatur aliquam? Maxime tempora, qui distinctio eius saepe optio? Nulla reprehenderit perferendis exercitationem voluptas eveniet quas temporibus. Atque ex eveniet necessitatibus harum quos commodi, quaerat molestias voluptatibus hic sunt numquam similique eos minus eaque animi dolor possimus ipsam. Dicta culpa quis aspernatur quas ad doloremque quidem voluptatem quod. Officiis corporis asperiores expedita omnis, atque molestias? Rerum, quos dolore cupiditate provident culpa aut nisi ratione totam dignissimos beatae corporis doloribus. Dicta necessitatibus, tenetur, enim, eveniet quos facere modi expedita quia cum accusamus iste distinctio saepe dolores reprehenderit voluptate praesentium. Voluptates minus magnam officia iure corrupti iste rerum dicta cum dolorum molestias nam facilis accusantium, autem aperiam laborum recusandae, obcaecati nobis optio aut. Ut ipsum vitae natus voluptatum officiis sit inventore dicta architecto asperiores! Voluptatibus possimus accusantium nam quia quis quaerat a adipisci atque mollitia?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit velit labore, molestiae nisi hic inventore.",
  },
  {
    id: 10,
    title: "Article Title",
    order: 10,
    completed: false,
    author: "Dimas-Ilaw",
    imageSrc: "https://dummyimage.com/400x300/000/fff",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maxime animi sit, enim molestias veritatis excepturi ab aspernatur aliquam? Maxime tempora, qui distinctio eius saepe optio? Nulla reprehenderit perferendis exercitationem voluptas eveniet quas temporibus. Atque ex eveniet necessitatibus harum quos commodi, quaerat molestias voluptatibus hic sunt numquam similique eos minus eaque animi dolor possimus ipsam. Dicta culpa quis aspernatur quas ad doloremque quidem voluptatem quod. Officiis corporis asperiores expedita omnis, atque molestias? Rerum, quos dolore cupiditate provident culpa aut nisi ratione totam dignissimos beatae corporis doloribus. Dicta necessitatibus, tenetur, enim, eveniet quos facere modi expedita quia cum accusamus iste distinctio saepe dolores reprehenderit voluptate praesentium. Voluptates minus magnam officia iure corrupti iste rerum dicta cum dolorum molestias nam facilis accusantium, autem aperiam laborum recusandae, obcaecati nobis optio aut. Ut ipsum vitae natus voluptatum officiis sit inventore dicta architecto asperiores! Voluptatibus possimus accusantium nam quia quis quaerat a adipisci atque mollitia?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit velit labore, molestiae nisi hic inventore.",
  },
];

module.exports = { articles };
