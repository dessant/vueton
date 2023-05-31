function addRecentPointerEventListener() {
  if (!window.recentPointerEventListener) {
    window.recentPointerEventListener = true;

    window.addEventListener(
      'pointerdown',
      ev => {
        window.recentPointerEvent = Date.now();

        window.setTimeout(() => {
          const pointerEvent = window.recentPointerEvent;

          if (pointerEvent && Date.now() - pointerEvent >= 400) {
            delete window.recentPointerEvent;
          }
        }, 500);
      },
      {capture: true, passive: true}
    );
  }
}

export {addRecentPointerEventListener};
