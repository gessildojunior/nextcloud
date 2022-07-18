OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Não foi possível limpar os mapas.",
    "Failed to delete the server configuration" : "Não foi possível eliminar a configuração do servidor",
    "No action specified" : "Nenhuma ação especificada",
    "No configuration specified" : "Nenhuma configuração especificada",
    "No data specified" : "Nenhuns dados especificados",
    " Could not set configuration %s" : "Não foi possível definir a configuração %s",
    "Action does not exist" : "A ação não existe",
    "Very weak password" : "Palavra-passe muito fraca",
    "Weak password" : "Palavra-passe fraca",
    "So-so password" : "Palavra-passe aceitável",
    "Good password" : "Palavra-passe boa",
    "Strong password" : "Palavra-passe forte",
    "The Base DN appears to be wrong" : "O ND de Base parece estar errado",
    "Testing configuration…" : "A testar a configuração…",
    "Configuration incorrect" : "Configuração incorreta",
    "Configuration incomplete" : "Configuração incompleta",
    "Configuration OK" : "Configuração OK",
    "Select groups" : "Selecionar grupos",
    "Select object classes" : "Selecionar classes de objetos",
    "Please check the credentials, they seem to be wrong." : "Por favor, verifique as credenciais, elas parecem estar erradas.",
    "Please specify the port, it could not be auto-detected." : "Por favor, especifique a porta, esta não pode ser detetada automaticamente.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Não foi possível detetar automaticamente o ND base, por favor, verifique as credenciais, anfitrião e porta.",
    "Could not detect Base DN, please enter it manually." : "Não foi possível detetar o ND de base, por favor introduza-o manualmente.",
    "{nthServer}. Server" : "{nthServer}. Servidor",
    "No object found in the given Base DN. Please revise." : "Nenhum objecto encontrado na Base DN fornecida. Por favor verifique.",
    "More than 1,000 directory entries available." : "Mais de 1,000 entradas de diretório disponíveis.",
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Ocorreu um erro. Por favor verifique o ND de base, bem como as definições de ligação e as credenciais.",
    "Do you really want to delete the current Server Configuration?" : "Deseja eliminar a 'Configuração do Servidor' atual?",
    "Confirm Deletion" : "Confirmar Eliminação",
    "Mappings cleared successfully!" : "Mapas limpos com sucesso!",
    "Error while clearing the mappings." : "Erro a limpar os mapas.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "Ligação anónima não permitida. Por favor forneça um ND de utilizador e password.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "Erro de operações LDAP. Ligação anónima pode não ser permitida.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Falha na gravação. Por favor verifique que a base de dados está operacional. Recarregar antes de continuar.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Trocando o modo vai permitir a busca automática no LDAP. Dependendo do tamanho do seu LDAP poderá demorar um pouco. Ainda pretende trocar o modo?",
    "Mode switch" : "Trocar de modo",
    "Select attributes" : "Selecionar atributos",
    "User found and settings verified." : "Utilizador encontrado e definições verificadas.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "O filtro de procura é inválido, provavelmente devido a problemas de sintaxe. Verifique se existem números ímpares de parêntisis abertos e/ou fechados. Por favor reveja.",
    "Please provide a login name to test against" : "Por favor, indique um nome de sessão para testar",
    "_%s group found_::_%s groups found_" : ["%s grupo encontrado","%s grupos encontrados","%s grupos encontrados"],
    "_%s user found_::_%s users found_" : ["%s utilizador encontrado","%s utilizadores encontrados","%s utilizadores encontrados"],
    "Could not find the desired feature" : "Não se encontrou a função desejada",
    "Invalid Host" : "Anfitrião Inválido",
    "Test Configuration" : "Testar a configuração",
    "Help" : "Ajuda",
    "Groups meeting these criteria are available in %s:" : "Grupos que satisfazerem estes critérios estão disponíveis em %s:",
    "Only these object classes:" : "Apenas estas classes de objetos:",
    "Only from these groups:" : "Apenas destes grupos:",
    "Search groups" : "Procurar grupos",
    "Available groups" : "Grupos disponiveis",
    "Selected groups" : "Grupos selecionados",
    "Edit LDAP Query" : "Editar Consulta de LDAP",
    "LDAP Filter:" : "Filtro LDAP:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "O filtro especifica quais grupos LDAP devem ter acesso à instância %s.",
    "When logging in, %s will find the user based on the following attributes:" : "Quando entrar no sistema, %s irá encontrar o utilizador baseando-se nos seguintes atributos:",
    "Other Attributes:" : "Outros Atributos:",
    "Test Loginname" : "Testar nome de login",
    "Verify settings" : "Verificar definições",
    "%s. Server:" : "%s. Servidor:",
    "Copy current configuration into new directory binding" : "Copiar a configuração atual para um novo registo de diretoria",
    "Delete the current configuration" : "Eliminar a configuração atual",
    "Host" : "Anfitrião",
    "Port" : "Porta",
    "Detect Port" : "Detetar Porta",
    "User DN" : "DN do Utilizador",
    "Password" : "Palavra-passe",
    "For anonymous access, leave DN and Password empty." : "Para acesso anónimo, deixe DN e a Palavra-passe vazios.",
    "One Base DN per line" : "Uma Base DN por linha",
    "You can specify Base DN for users and groups in the Advanced tab" : "Pode especificar Base DN para os utilizadores e grupos no separador Avançado",
    "Detect Base DN" : "Detetar Base DN",
    "Test Base DN" : "Testar Base DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Evita pedidos LDAP automáticos. Melhor para grandes configurações, mas requer conhecimentos LDAP.",
    "Manually enter LDAP filters (recommended for large directories)" : "Introduzir filtros LDAP manualmente (recomendado para directórios grandes)",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "Os objectos mais comuns para utilizadores são <em>organizationalPerson, person, user, and inetOrgPerson</em>. Se não tem a certeza de que classe de objecto deverá seleccionar, por favor, contacte o administrador do Directório.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "O filtro especifica quais utilizadores do LDAP devem ter acesso  à instância %s.",
    "Verify settings and count users" : "Verificar definições e contar utilizadores",
    "Saving" : "A guardar",
    "Back" : "Anterior",
    "Continue" : "Continuar",
    "An internal error occurred." : "Ocorreu um erro interno.",
    "Please try again or contact your administrator." : "Por favor, tente de novo ou contacte o seu administrador.",
    "Current password" : "Palavra-passe atual",
    "New password" : "Nova palavra-passe",
    "Wrong password." : "Palavra-passe errada.",
    "Cancel" : "Cancelar",
    "Server" : "Servidor",
    "Users" : "Utilizadores",
    "Login Attributes" : "Atributos de Sessão",
    "Groups" : "Grupos",
    "Expert" : "Técnico",
    "Advanced" : "Avançado",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Aviso:</b> o módulo PHP LDAP não está instalado, \"backend\" não irá funcionar. Por favor, peça ao seu administrador para o instalar.",
    "Connection Settings" : "Definições de Ligação",
    "Configuration Active" : "Configuração Ativa",
    "When unchecked, this configuration will be skipped." : "Se não estiver marcada, esta definição não será tida em conta.",
    "Backup (Replica) Host" : "Anfitrião de Cópia de Segurança (Réplica)",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Indique um anfitrião de cópia de segurança. Este deve ser uma réplica do servidor principal de LDAP/AD ",
    "Backup (Replica) Port" : "Porta do servidor de backup (Replica)",
    "Disable Main Server" : "Desactivar servidor principal",
    "Only connect to the replica server." : "Ligar apenas ao servidor de réplicas.",
    "Turn off SSL certificate validation." : "Desligar a validação de certificado SSL.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Não recomendado, use-o somente para teste! ligação só funciona com esta opção, importar o certificado SSL do servidor LDAP para o seu servidor %s.",
    "Cache Time-To-Live" : "Cache do tempo de vida dos objetos no servidor",
    "in seconds. A change empties the cache." : "em segundos. Uma alteração esvazia a cache.",
    "Directory Settings" : "Definições de directorias",
    "User Display Name Field" : "Mostrador do nome de utilizador.",
    "The LDAP attribute to use to generate the user's display name." : "O atributo de LDAP para gerar o nome a exibir do utilizador.",
    "2nd User Display Name Field" : "2.º Mostrador do Nome de Utilizador.",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "Opcional. Atributo LDAP a ser adicionado ao nome de utilizador entre parênteses. Resultados em e.g. »John Doe (john.doe@example.org)«.",
    "Base User Tree" : "Base da árvore de utilizadores.",
    "One User Base DN per line" : "Uma base de utilizador DN por linha",
    "User Search Attributes" : "Utilizar atributos de pesquisa",
    "Optional; one attribute per line" : "Opcional; Um atributo por linha",
    "Group Display Name Field" : "Mostrador do nome do grupo.",
    "The LDAP attribute to use to generate the groups's display name." : "O atributo de LDAP para gerar o nome a exibir do grupo.",
    "Base Group Tree" : "Base da árvore de grupos.",
    "One Group Base DN per line" : "Uma base de grupo DN por linha",
    "Group Search Attributes" : "Atributos de pesquisa de grupo",
    "Group-Member association" : "Associar utilizador ao grupo.",
    "Dynamic Group Member URL" : "URL Dinâmica de Membro do Grupo",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "O atributo LDAP que em objetos de grupo contém um URL de pesquisa LDAP que determina que objetos pertencem ao grupo. (Uma definição vazia desativa a funcionalidade de membros de grupo dinâmico.)",
    "Nested Groups" : "Grupos agrupados",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Quando habilitado os grupos, os grupos são suportados. (Só funciona se o atributo de membro de grupo contém DNs.)",
    "Paging chunksize" : "Bloco de paginação",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Tamanho do bloco usado para pesquisas LDAP paginados que podem retornar resultados volumosos como utilizador ou grupo de enumeração. (Defini-lo 0 desactiva paginada das pesquisas LDAP nessas situações.)",
    "Special Attributes" : "Atributos especiais",
    "Quota Field" : "Quota",
    "Quota Default" : "Quota padrão",
    "Email Field" : "Campo de email",
    "User Home Folder Naming Rule" : "Regra da pasta inicial do utilizador",
    "Internal Username" : "Nome de utilizador interno",
    "Internal Username Attribute:" : "Atributo do nome de utilizador interno",
    "Override UUID detection" : "Passar a detecção do UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Por defeito, o ownCloud detecta automaticamente o atributo UUID. Este atributo é usado para identificar inequivocamente grupos e utilizadores LDAP. Igualmente, o nome de utilizador interno é criado com base no UUID, se o contrário não for especificado. Pode sobrepor esta definição colocando um atributo à sua escolha. Tenha em atenção que esse atributo deve ser válido tanto para grupos como para utilizadores, e que é único. Deixe em branco para optar pelo comportamento por defeito. Estas alteração apenas terão efeito em novos utilizadores e grupos mapeados (adicionados).",
    "UUID Attribute for Users:" : "Atributo UUID para utilizadores:",
    "UUID Attribute for Groups:" : "Atributo UUID para grupos:",
    "Username-LDAP User Mapping" : "Mapeamento do utilizador LDAP",
    "Clear Username-LDAP User Mapping" : "Limpar mapeamento do utilizador-LDAP",
    "Clear Groupname-LDAP Group Mapping" : "Limpar o mapeamento do nome de grupo LDAP"
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
