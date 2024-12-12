export const uiDrag = {
  init: (config) => {
    const { parents, elements } = config;

    uiDrag.initializeDraggAbleParents(parents);
    uiDrag.initializeDraggAbleElements(elements);
  },

  initializeDraggAbleParents: (parentsData) => {
    parentsData.forEach((parentData) => {
      const nodeParent = document.getElementById(parentData.id);

      nodeParent.addEventListener("dragover", (event) => {
        event.preventDefault();
      });

      nodeParent.addEventListener("drop", (event) => {
        event.preventDefault();

        const idElement = event.dataTransfer.getData("text");
        const nodeElement = document.getElementById(idElement.id);

        if (!event.target.contains(nodeElement)) {
          event.target.appendChild(nodeElement);
        }
      });
    });
  },

  initializeDraggAbleElements: (nodeElements) => {
    nodeElements.forEach((nodeElement) => {
      nodeElement.setAttribute("draggable", "true");
      nodeElement.addEventListener("dragstart", (event) => {
        const rect = event.target.getBoundingClientRect();

        event.dataTransfer.setData("text", `${event.target.id}`);
      });
    });
  },
};

export default ui;
