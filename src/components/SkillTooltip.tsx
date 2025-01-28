import React from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
} from '@floating-ui/react';

interface SkillTooltipProps {
  children: React.ReactNode;
  content: string;
  theme: { isDark: boolean };
}

export function SkillTooltip({ children, content, theme }: SkillTooltipProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'top',
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>
      <FloatingPortal>
        {isOpen && (
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className={`${
              theme.isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
            } px-3 py-2 rounded shadow-lg max-w-xs text-sm z-50`}
          >
            {content}
          </div>
        )}
      </FloatingPortal>
    </>
  );
}