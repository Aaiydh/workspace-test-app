import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Search as SearchIcon } from "lucide-react";
import { products } from "@/lib/data";
import { quotations } from "@/data/quotations";
import { Button } from "@/components/ui/button";

export function Search() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredQuotations = quotations.filter(
    (quotation) =>
      quotation.customerName.toLowerCase().includes(search.toLowerCase()) ||
      quotation.id.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (type: string, item: any) => {
    setOpen(false);
    if (type === "product") {
      router.push(`/products/${item.id}`);
    } else if (type === "quotation") {
      router.push(`/quotations/${item.id}`);
    }
  };

  return (
    <div className="relative w-full max-w-sm">
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start text-sm text-muted-foreground"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline-flex">
          Search products, quotations...
        </span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 lg:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type to search..."
          value={search}
          onValueChange={setSearch}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {search.length > 0 && (
            <>
              {filteredProducts.length > 0 && (
                <CommandGroup heading="Products">
                  {filteredProducts.map((product) => (
                    <CommandItem
                      key={product.id}
                      onSelect={() => handleSelect("product", product)}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="font-medium">{product.name}</span>
                        <span className="ml-2 text-sm text-muted-foreground">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
              {filteredQuotations.length > 0 && (
                <CommandGroup heading="Quotations">
                  {filteredQuotations.map((quotation) => (
                    <CommandItem
                      key={quotation.id}
                      onSelect={() => handleSelect("quotation", quotation)}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="font-medium">
                          {quotation.customerName}
                        </span>
                        <span className="ml-2 text-sm text-muted-foreground">
                          #{quotation.id}
                        </span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </>
          )}
        </CommandList>
      </CommandDialog>
    </div>
  );
} 