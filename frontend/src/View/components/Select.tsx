import * as RdxSelect from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import { cn } from '../../app/utils/cn';

interface SelectProps {
  className?: string;
  error?: string;
}

export function Select({ className, error }: SelectProps) {
  return (
    <div>
      <RdxSelect.Root>
        <RdxSelect.Trigger
          className={cn(
            "bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 focus:border-gray-800 transition-all outline-none text-left relative",
            error && "!border-red-900",
            className,
          )}
        >
          <RdxSelect.Value />
          <RdxSelect.Icon className="absolute right-3">
            <ChevronDownIcon className="w-6 h-6 text-gray-800" />
          </RdxSelect.Icon>
        </RdxSelect.Trigger>
        <RdxSelect.Portal>
          <RdxSelect.Content className="z-[99] overflow-hidden bg-white rounded-2xl border boder-gray-100 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]">
            <RdxSelect.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-gray-800 cursor-default">
              <ChevronUpIcon />
            </RdxSelect.ScrollUpButton>

            <RdxSelect.Viewport className="p-2">

              <RdxSelect.Item
                value="Banana"
                className="p-2 text-gray-800 text-sm data-[state=checked]:font-bold outline-none data-[highlighted]:bg-gray-50 rounded-lg transition-colors"
              >
                <RdxSelect.ItemText>Banana</RdxSelect.ItemText>
              </RdxSelect.Item>
              <RdxSelect.Item
                value="Acerola"
                className="p-2 text-gray-800 text-sm data-[state=checked]:font-bold outline-none data-[highlighted]:bg-gray-50 rounded-lg transition-colors"
              >
                <RdxSelect.ItemText>Acerola</RdxSelect.ItemText>
              </RdxSelect.Item>
              <RdxSelect.Item
                value=" Uva"
                className="p-2 text-gray-800 text-sm data-[state=checked]:font-bold outline-none data-[highlighted]:bg-gray-50 rounded-lg transition-colors"
              >
                <RdxSelect.ItemText>Uva</RdxSelect.ItemText>
              </RdxSelect.Item>

            </RdxSelect.Viewport>

            <RdxSelect.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-gray-800 cursor-default">
              <ChevronDownIcon />
            </RdxSelect.ScrollDownButton>
          </RdxSelect.Content>
        </RdxSelect.Portal>
      </RdxSelect.Root>

      {error && (
        <div className="flex gap-2 items-center mt-2 text-red-900">
          <CrossCircledIcon />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );
}