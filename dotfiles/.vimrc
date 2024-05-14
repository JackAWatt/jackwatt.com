set nocompatible
set history=1000
filetype plugin indent on
set number

set shiftwidth=4
set softtabstop=4
set expandtab
set smarttab
set autoindent

set scrolloff=3
set sidescrolloff=7
set sidescroll=1

let mapleader = ","

nnoremap <leader><space> :noh<cr>
set textwidth=79

nnoremap ; :

nnoremap <leader>ev <C-w><C-v><C-l>:e $MYVIMRC<cr>
nnoremap <leader>n :nohlsearch<CR>
syntax off

set foldenable
set foldlevelstart=3
set foldnestmax=3
set foldmethod=indent
nnoremap <space> za

set showmode
set showcmd

set relativenumber

"fancy splits
set winwidth=84
set winheight=5
set winminheight=5
set winheight=999
"switch between last two files
nnoremap <leader><leader> <c-^>
"easier split navigation
nnoremap <C-J> <C-W><C-J>
nnoremap <C-K> <C-W><C-K>
nnoremap <C-L> <C-W><C-L>
nnoremap <C-H> <C-W><C-H>

"leader keys
nnoremap <leader>j <C-W><C-J>
nnoremap <leader>k <C-W><C-K>
nnoremap <leader>l <C-W><C-L>
nnoremap <leader>h <C-W><C-H>

if has("autocmd")
      au BufReadPost * if line("'\"") > 0 && line("'\"") <= line("$")
          \| exe "normal! g'\"" | endif
endif

"turn off backup
set nobackup
set nowb
set noswapfile
set hlsearch
