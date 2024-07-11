import { ScrollController } from '@/scripts/scrollController';
import { getEasingFunction } from '@/scripts/getEasingFunction';

const _scrollController = ScrollController();

type Props = {
  element: Element | null;
};

export const GlobalNavigationCore = () => {
  const elements: {
    top: Element | null;
    bg: Element | null;
    control: HTMLElement | null;
    navi: Element | null;
  } = {
    top: null,
    bg: null,
    control: null,
    navi: null,
  };

  const states = {
    isOpen: false,
    isMoving: false,
    isDisabled: false,
  };

  const options = {
    speed: 300,
    easing: getEasingFunction('easeOutCirc'),
    disabledClass: '-disabled',
  };

  const baseSetting = {
    easing: options.easing,
    duration: options.speed,
  };

  const getState = () => {
    return {
      start: { opacity: 0, transform: 'scale(1.2) translateY(-10px)' },
      end: { opacity: 1, transform: 'scale(1) translateY(0px)' },
    };
  };

  const getBgState = () => {
    return {
      start: { opacity: 0 },
      end: { opacity: 1 },
    };
  };

  const closeEnd = () => {
    states.isOpen = false;
    states.isMoving = false;
    _scrollController.release();
    elements.bg?.setAttribute('aria-hidden', 'true');
    if (!states.isDisabled) elements.navi?.setAttribute('aria-hidden', 'true');
    elements.control?.focus();
  };

  const close = () => {
    states.isMoving = true;
    elements.control?.setAttribute('aria-expanded', 'false');
    elements.navi?.animate([]).cancel();
    elements.navi?.animate([getState().end, getState().start], baseSetting);
    elements.bg?.animate([]).cancel();
    const bg = elements.bg?.animate([getBgState().end, getBgState().start], baseSetting);
    if (bg)
      bg.onfinish = () => {
        closeEnd();
      };
  };

  const open = () => {
    states.isMoving = true;
    states.isOpen = true;
    _scrollController.lock();
    elements.control?.setAttribute('aria-expanded', 'true');
    elements.navi?.setAttribute('aria-hidden', 'false');
    elements.navi?.animate([getState().start, getState().end], { ...baseSetting, delay: 100, fill: 'both' });
    elements.bg?.setAttribute('aria-hidden', 'false');
    const bg = elements.bg?.animate([getBgState().start, getBgState().end], baseSetting);
    if (bg)
      bg.onfinish = () => {
        states.isMoving = false;
      };
  };

  const onClickHandler = () => {
    if (states.isMoving || states.isDisabled) return;
    if (states.isOpen) {
      close();
    } else {
      open();
    }
  };

  const setAccesibility = () => {
    elements.top?.querySelector('[data-role="trap"]')?.addEventListener('focus', () => {
      elements.control?.focus();
    });
  };

  const checkElements = (element: Element) => {
    elements.top = element;
    if (!elements.top) {
      console.log(`${element}がありません`);
      return;
    }
    elements.control = elements.top.querySelector('[data-role="control"]');
    if (!elements.control) {
      console.log(`[data-role="control"]のElementがありません`);
      return;
    }
    elements.navi = elements.top.querySelector('[data-role="navi"]');
    if (!elements.navi) {
      console.log(`[data-role="navi"]のElementがありません`);
      return;
    }
    elements.bg = elements.top.querySelector('[data-role="bg"]');
    if (!elements.bg) {
      console.log(`[data-role="bg"]のElementがありません`);
      return;
    }
  };

  return {
    init: (props: Props) => {
      const { element } = props;
      if (!element) return;

      checkElements(element);

      const samePageLinks = elements.navi && Array.from(elements.navi.querySelectorAll('a[href^="#"]'));
      if (samePageLinks && samePageLinks.length > 0) {
        samePageLinks.forEach((link) => {
          link.addEventListener('click', () => {
            if (!states.isDisabled && states.isOpen) close();
          });
        });
      }

      elements.control?.addEventListener('click', onClickHandler);
      [elements.bg, elements.control].forEach((element) => {
        element?.addEventListener('click', onClickHandler);
      });

      setAccesibility();
      _scrollController.init();
    },
    disabled: (check: boolean) => {
      states.isDisabled = check;
      elements.top?.classList.toggle(options.disabledClass, states.isDisabled);
      if (states.isDisabled && states.isOpen) {
        closeEnd();
      }
      elements.navi?.setAttribute('aria-hidden', String(!states.isDisabled));
      elements.control?.setAttribute('aria-expanded', String(states.isDisabled));
    },
    escapeClose: () => {
      if (!states.isDisabled && states.isOpen) close();
    },
  };
};
